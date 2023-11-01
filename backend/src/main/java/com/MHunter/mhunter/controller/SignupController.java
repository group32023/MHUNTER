package com.MHunter.mhunter.controller;

import com.MHunter.mhunter.model.User;
import com.MHunter.mhunter.service.SignupService;
import com.MHunter.mhunter.struct.LoginRequest;
import com.MHunter.mhunter.struct.SignupRequest;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class SignupController {
    @Autowired
    private SignupService signupService;

    /*@PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody SignupRequest signupRequest) {
        User newUser = new User();
        newUser.setAddress(signupRequest.getAddress());
        newUser.setPhoneNumber(signupRequest.getPhoneNumber());
        newUser.setEmail(signupRequest.getEmail());
        newUser.setFirstName(signupRequest.getFirstName());
        newUser.setLastName(signupRequest.getLastName());
        newUser.setPassword(signupRequest.getPassword());
        newUser.setRegDate(signupRequest.getRegDate());

        signupService.signUpAndCreateMember(newUser, signupRequest.getName(), signupRequest.getType());
        return ResponseEntity.ok("User signed up successfully");
    }*/
    @PostMapping("/signup")
    public ResponseEntity<String> signUp(@ModelAttribute SignupRequest signupRequest,
                                         @RequestParam("Image") MultipartFile Image) {
        User newUser = new User();
        newUser.setAddress(signupRequest.getAddress());
        newUser.setPhoneNumber(signupRequest.getPhoneNumber());
        newUser.setEmail(signupRequest.getEmail());
        newUser.setFirstName(signupRequest.getFirstName());
        newUser.setLastName(signupRequest.getLastName());
        newUser.setPassword(signupRequest.getPassword());
        newUser.setRegDate(signupRequest.getRegDate());

        ResponseEntity<String> response= signupService.signUpAndCreateMember(newUser, signupRequest.getName(), signupRequest.getType(), Image);
        return response;
    }
    @PostMapping(path = "/login")
    public ResponseEntity<String> loginUser(@RequestBody LoginRequest loginRequest) {
        try {
            User user = new User();
            user.setEmail(loginRequest.getEmail());
            user.setPassword(loginRequest.getPassword());

            ResponseEntity<String> response = signupService.loginUser(user);
            return response;
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred");
        }
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable int userId) {
        User user = signupService.getUserById(userId);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    private static String imagePath = System.getProperty("user.dir")+"/src/main/java/com/MHunter/mhunter/Uploads/Images";

    @GetMapping("/uploads/images/{imageName:.+}")
    public ResponseEntity<Resource> getImage(@PathVariable String imageName) {

        Path path = Paths.get(imagePath,imageName);
        org.springframework.core.io.Resource resource;
        try{
            resource = new UrlResource(path.toUri());
            String contentType = determineContentType(imageName);
            if(resource.exists() || resource.isReadable()){
                return ResponseEntity.ok().contentType(MediaType.parseMediaType(contentType)).body((Resource) resource); // Adjust content type if needed.
            } else {
                throw new RuntimeException("Failed to read the file!");
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException("Error: " + e.getMessage());
        }
    }

    private String determineContentType(String imageName) {
        String extension =imageName.substring(imageName.lastIndexOf(".") + 1).toLowerCase();
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
