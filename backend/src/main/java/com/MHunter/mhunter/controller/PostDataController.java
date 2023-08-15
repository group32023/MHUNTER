package com.MHunter.mhunter.controller;

import com.MHunter.mhunter.model.Post;
import com.MHunter.mhunter.model.PostData;
import com.MHunter.mhunter.service.PostDataService;
import com.MHunter.mhunter.service.PostService;
import com.MHunter.mhunter.struct.PostDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FilenameFilter;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/postData")
public class PostDataController {
    @Autowired
    private PostDataService postDataService;
    @Autowired
    private PostService postService;

    private static String videoPath =System.getProperty("user.dir")+ "/src/main/java/com/MHunter/mhunter/Uploads/Videos";
    private static String audioPath = System.getProperty("user.dir")+"/src/main/java/com/MHunter/mhunter/Uploads/Audios";
    private static String imagePath = System.getProperty("user.dir")+"/src/main/java/com/MHunter/mhunter/Uploads/Images";

    String[] imageExtension = {"jpg","png","jpeg"};
    String[] videoExtension = {"mp4","mkv"};
    String[] audioExtension = {"mp3","pcm","wav"};
    @RequestMapping(value = "/uploads",consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> uploads(@RequestParam("file") MultipartFile multipartFile, @RequestParam String caption, @RequestParam String description, @RequestParam String mmid) {
        String extension = multipartFile.getOriginalFilename().substring(multipartFile.getOriginalFilename().lastIndexOf(".") + 1);
        String currentDateTime = LocalDateTime.now().toString();
        String fileName = multipartFile.getOriginalFilename().substring(0,multipartFile.getOriginalFilename().lastIndexOf(".") - 1).concat(currentDateTime)+".".concat(extension);
        String sanitizedFileName = fileName.replace(':', '_');
        Path fileNamePath;
        System.out.println(sanitizedFileName);

        if(multipartFile.getSize()<1048576){
            if(Arrays.asList(imageExtension).contains(extension) ){
                makeDirectoryIfNotExist(imagePath);
                fileNamePath = Paths.get(imagePath,sanitizedFileName);
            }
            else if(Arrays.asList(videoExtension).contains(extension)){
                makeDirectoryIfNotExist(videoPath);
                fileNamePath = Paths.get(videoPath,sanitizedFileName);
            }
            else {
                makeDirectoryIfNotExist(audioPath);
                fileNamePath = Paths.get(audioPath,sanitizedFileName);
            }

            try{
                Files.write(fileNamePath,multipartFile.getBytes());
                createPost(caption,description,mmid);
                addFileToDB(sanitizedFileName,mmid);
                return new ResponseEntity<>(sanitizedFileName,HttpStatus.CREATED);
            }
            catch (IOException ex){
                return new ResponseEntity<>("Image is not uploaded",HttpStatus.BAD_REQUEST);
            }
        }
        else {
            return new ResponseEntity<>("File is too large",HttpStatus.BAD_REQUEST);
        }


    }

    private void makeDirectoryIfNotExist(String imageDirectory){
        File directory = new File(imageDirectory);
        if(!directory.exists()){
            directory.mkdir();
        }
    }

    private void createPost(String caption,String description,String mmid){
        Post post = new Post();
        post.setCaption(caption);
        post.setDescription(description);
        post.setMMID(Integer.parseInt(mmid));
        post.setDate(LocalDateTime.now());
        postService.save(post);
    }

    private void addFileToDB(String fileName,String mmid){
        int postId = postService.getPostID(Integer.parseInt(mmid));
        PostData postData = new PostData();
        postData.setPostId(postId);
        postData.setData(fileName);
        System.out.println(postData);
        postDataService.save(postData);
    }

    @GetMapping("/postDetails/{mmid}")
    private List<PostDetails> getAllPostDetails(@PathVariable int mmid){

      List<Post> posts =   postService.findBySpecificPosts(mmid);
      List<PostDetails> postDet = new ArrayList<>();

      posts.forEach(res->{
          PostDetails postDetails = new PostDetails();
          String fileName = postDataService.getPostData(res.getPostId());
          postDetails.setPostID(res.getPostId());
          postDetails.setCaption(res.getCaption());
          postDetails.setDescription(res.getDescription());
          postDetails.setFileName(fileName);
          postDetails.setDate(res.getDate().toLocalDate());

//          get the file extension
          if(fileName != null){
              String extension =fileName.substring(fileName.lastIndexOf(".") + 1);
              postDetails.setFileType(extension);
              if(Arrays.asList(imageExtension).contains(extension)){
                  postDetails.setFilePath(imagePath+"/"+fileName);
              }
              else if(Arrays.asList(videoExtension).contains(extension)){
                  postDetails.setFilePath(videoPath+"/"+fileName);
              }
              else{
                  postDetails.setFilePath(audioPath+"/"+fileName);
              }
          }
          postDet.add(postDetails);
      });
      return postDet;
    }

    @GetMapping("/uploads/image/{filename:.+}")
    public ResponseEntity<Resource> serveImage(@PathVariable String filename){
        Path path = Paths.get(imagePath,filename);
        System.out.println("awa");
        Resource resource;
        try{
            resource = new UrlResource(path.toUri());
            String contentType = determineContentType(filename);
            if(resource.exists() || resource.isReadable()){
                return ResponseEntity.ok().contentType(MediaType.parseMediaType(contentType)).body(resource); // Adjust content type if needed.
            } else {
                throw new RuntimeException("Failed to read the file!");
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException("Error: " + e.getMessage());
        }
    }

    @GetMapping("/uploads/video/{filename:.+}")
    public ResponseEntity<Resource> serveVideo(@PathVariable String filename){
        Path path = Paths.get(videoPath,filename);
        Resource resource;
        try{
            resource = new UrlResource(path.toUri());
            String contentType = determineContentType(filename);
            if(resource.exists() || resource.isReadable()){
                return ResponseEntity.ok().contentType(MediaType.parseMediaType(contentType)).body(resource); // Adjust content type if needed.
            } else {
                throw new RuntimeException("Failed to read the file!");
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException("Error: " + e.getMessage());
        }
    }

    @GetMapping("/uploads/audio/{filename:.+}")
    public ResponseEntity<Resource> serveAudio(@PathVariable String filename){
        Path path = Paths.get(audioPath,filename);
        Resource resource;
        try{
            resource = new UrlResource(path.toUri());
            String contentType = determineContentType(filename);
            if(resource.exists() || resource.isReadable()){
                return ResponseEntity.ok().contentType(MediaType.parseMediaType(contentType)).body(resource); // Adjust content type if needed.
            } else {
                throw new RuntimeException("Failed to read the file!");
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException("Error: " + e.getMessage());
        }
    }

    private String determineContentType(String fileName){
        String extension =fileName.substring(fileName.lastIndexOf(".") + 1).toLowerCase();
        switch (extension){
            case "mp4": return "video/mp4";
            case "mkv": return "video/x-matroska";
            case "mp3": return "audio/mpeg";
            case "wav": return "audio/wav";
            case "jpg":
            case "jpeg": return "image/jpeg";
            case "png": return "image/png";
            default: return "application/octet-stream";

        }
    }

}
