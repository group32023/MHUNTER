/*package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.User;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import com.MHunter.mhunter.repository.UserRepository;



@Service
public class UserServiceImp implements UserService{
    @Autowired
    private UserRepository userRepository;
    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public String loginUser(@NotNull User user) {
        String msg = "";
        User user1 = userRepository.findByEmail(user.getEmail());
        if (user1!= null) {
            String password = user.getPassword();
            String checkPassword = user1.getPassword();
            if (password.equals(checkPassword)) {
                msg="Login Success";
            } else {
                msg = "Incorrect password!";
            }
            msg += "#" + user1.getMemberType();
        } else {
            msg = "User not found!";
        }
            return msg;
    }


}*/
