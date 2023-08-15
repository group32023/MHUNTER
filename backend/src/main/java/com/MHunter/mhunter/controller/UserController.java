package com.MHunter.mhunter.controller;

import com.MHunter.mhunter.model.User;
import com.MHunter.mhunter.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;


    /*@PostMapping("/signup")
    public String signup(@RequestBody User user ){
        userService.saveUser(user);
        return "Add User";
    }*/


   /* @PostMapping(path = "/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody User user) {
        String msg = userService.loginUser(user);
        Map<String, String> response = new HashMap<>();
        response.put("msg", msg);
        return ResponseEntity.ok(response);
    }*/

//    @GetMapping("/viewSpecificUser/{id}")
//    public User viewSpecificUser(@PathVariable int id){
//        return userService.findSpecificUser(id);
//
//    }

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

    @GetMapping("/viewSpecificUser/{id}")
    public User viewSpecificUser(@PathVariable int id){
        return userService.findSpecificUser(id);

}

}
