package com.MHunter.mhunter.service;

import com.MHunter.mhunter.DTO.UserDTO;
import com.MHunter.mhunter.model.User;
import com.MHunter.mhunter.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserServiceImp implements UserService{

    @Autowired
    private UserRepository userRepository;

    //@Autowired
    //private PasswordEncoder passwordEncoder;

    @Override
    public  String addUser(UserDTO userDTO){
        User user = new User(
                userDTO.getUserid(),
                userDTO.getUsername(),
                userDTO.getEmail(),
                userDTO.getPassword()
               // this.passwordEncoder.encode(userDTO.getPassword())
        );

        userRepository.save(user);

        return user.getUsername();

    }

    /*@Override
    public User loginUser(String email, String password) {
        User user = userRepository.findByEmail(email);
        if (user != null && (password == user.getPassword())) {
            return user;
        }
        return null; // Invalid credentials
    }*/
}
