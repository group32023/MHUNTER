package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.User;

public interface UserService {
    String addUser(User user);

    User loginUser(String email, String password);
}
