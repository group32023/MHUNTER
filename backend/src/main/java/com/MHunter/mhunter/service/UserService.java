package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.User;

import java.util.List;

public interface UserService {
    public User saveUser(User user);

    public List<User> findAllUser();
    public User findSpecificUser(int id);

    public User updateUser(User user,int id);
    public boolean deleteUser(int id);

}