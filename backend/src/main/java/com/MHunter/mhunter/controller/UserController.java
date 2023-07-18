package com.MHunter.mhunter.controller;

import com.MHunter.mhunter.DTO.UserDTO;
import com.MHunter.mhunter.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController

@RequestMapping("api/v1/user")

public class UserController {

    @Autowired
    private UserService userService;


    @PostMapping(path = "/save")
    public String saveUser(@RequestBody UserDTO userDTO) {
        String id = userService.addUser(userDTO);
        return id;
    }
/*
    @PostMapping("/login")
    public User loginUser(@RequestParam String email, @RequestParam String password) {
        User loggedInUser = userService.loginUser(email, password);
        if (loggedInUser != null) {
            return loggedInUser;
        }
            return null;

    }*/


}
