package com.MHunter.mhunter.controller;

import com.MHunter.mhunter.model.Post;
import com.MHunter.mhunter.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/post")
public class PostController {
    @Autowired
    private PostService postService;

    @PostMapping("/add")
    private String addPost(@RequestBody Post post){
        post.setDate(LocalDateTime.now());
        postService.save(post);
        return "added";
    }

    @GetMapping("/viewAll")
    private List<Post> viewPostAll(){
        return postService.viewAll();
    }

    @GetMapping("/view/{mmid}")
    private Post viewSpecific(@PathVariable int mmid){
        return postService.viewSpecificID(mmid);

    }

    @DeleteMapping("/delete/{pid}")
    private boolean deletePost(@PathVariable int pid){
        return postService.deletePost(pid);
    }

    @GetMapping("/viewPost/{mmid}")
    private List<Post> viewPosts(@PathVariable int mmid){
        return postService.findBySpecificPosts(mmid);
    }

    @GetMapping("/viewPostID/{mmid}")
    private int viewPostsID(@PathVariable int mmid){
        return postService.getPostID(mmid);
    }
}
