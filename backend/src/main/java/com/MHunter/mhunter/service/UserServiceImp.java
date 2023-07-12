package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.User;
import com.MHunter.mhunter.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImp implements UserService{

    @Autowired
    private UserRepository userRepository;

    /*@Autowired
    private PasswordEncoder passwordEncoder;*/

    @Override
    public String addUser(User user) {

        User nuser = new User(
                user.getUser_id(),
                user.getEmail(),
                user.getMember_type(),
                user.getPassword()

                /*this.passwordEncoder.encode(user.getPassword())*/
        );
        userRepository.save(user);
        return user.getEmail();
    }

    @Override
    public User loginUser(String email, String password) {
        User user = userRepository.findByEmail(email);
        if (user != null && (password == user.getPassword())) {
            return user;
        }
        return null; // Invalid credentials
    }
}
