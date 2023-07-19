package com.MHunter.mhunter.controller;

import com.MHunter.mhunter.model.User;
import com.MHunter.mhunter.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/User")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public String add(@RequestBody User user){
        userService.saveUser(user);
        return "New User added";
    }
    @GetMapping("/view")
    public List<User> view(){
        return userService.findAllUser();
    }
    @PutMapping("/edit/{id}")
    public User edit(@RequestBody User user,@PathVariable int id){
        return userService.updateUser(user,id);

    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable int id){
        userService.deleteUser(id);
        return "Delete Successfully";
    }

}
