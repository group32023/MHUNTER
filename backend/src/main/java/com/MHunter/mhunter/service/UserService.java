package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.User;

public interface UserService {
    public User saveUser(User user);

    public String loginUser(User user);
}
