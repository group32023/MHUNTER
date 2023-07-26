package com.mhunter.MHunter.controller;

import com.mhunter.MHunter.model.User;
import com.mhunter.MHunter.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public String signup(@RequestBody User user){
        userService.saveUser(user);
        return "Add User";
    }

}
