package com.MHunter.mhunter.controller;

import com.MHunter.mhunter.model.User;
import com.MHunter.mhunter.service.SignupService;
import com.MHunter.mhunter.struct.SignupRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class SignupController {

    @Autowired
    private SignupService signupService;

    @PostMapping("/signup")
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
    }
}