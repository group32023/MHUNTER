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

    @GetMapping("/users")
    List<User> getAllUsers() {
        return userRepository.findAll();
    }
    @GetMapping("/user/{userId}")
    User getUserById(@PathVariable int userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException(userId));
    }

    @PutMapping("/user/{userId}")
    User updateUser(@RequestBody User newUser, @PathVariable int userId) {
        return userRepository.findById(userId)
                .map(user -> {
                    user.setFirstName(newUser.getFirstName());
                    user.setEmail(newUser.getEmail());
                    return userRepository.save(user);
                }).orElseThrow(() -> new UserNotFoundException(userId));
    }

    @DeleteMapping("/user/{userId}")
    String deleteUser(@PathVariable int userId){
        if(!userRepository.existsById(userId)){
            throw new UserNotFoundException(userId);
        }
        userRepository.deleteById(userId);
        return  "User with id "+userId+" has been deleted success.";
    }

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
