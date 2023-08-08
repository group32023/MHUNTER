package com.MHunter.mhunter.controller;

import org.springframework.web.bind.annotation.RestController;

@RestController

//@RequestMapping("/user")
public class UserController {
    //@Autowired
    //private UserService userService;


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

}
