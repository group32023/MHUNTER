package com.MHunter.mhunter.controller;

import com.MHunter.mhunter.model.User;
import com.MHunter.mhunter.service.SignupService;
import com.MHunter.mhunter.struct.LoginRequest;
import com.MHunter.mhunter.struct.SignupRequest;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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

    private static final String UPLOAD_DIR = "Uploads/Images";

    @GetMapping("/uploads/images/{imageName:.+}")
    public ResponseEntity<Resource> getImage(@PathVariable String imageName) {
        String imagePath = "src/main/java/com/MHunter/mhunter/" + UPLOAD_DIR + "/" + imageName;
        try {
            ClassPathResource resource = new ClassPathResource(imagePath);

            if (resource.exists() && resource.isReadable()) {
                return ResponseEntity.ok().body((Resource) resource);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}
