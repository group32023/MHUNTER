package com.MHunter.mhunter.controller;

import com.MHunter.mhunter.model.User;
import com.MHunter.mhunter.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/user")

public class UserController {

    @Autowired
    private UserService userService;


    @PostMapping(path = "/save")
    public ResponseEntity<String> saveUser(@RequestBody User user) {
        String id = userService.addUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(id);
    }

    @PostMapping("/login")
    public User loginUser(@RequestParam String email, @RequestParam String password) {
        User loggedInUser = userService.loginUser(email, password);
        if (loggedInUser != null) {
            return loggedInUser;
        }
            return null;

    }


}
