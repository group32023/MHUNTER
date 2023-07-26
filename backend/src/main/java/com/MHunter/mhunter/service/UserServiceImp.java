package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.User;
import com.MHunter.mhunter.repository.ArtistRepository;
import com.MHunter.mhunter.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class UserServiceImp implements UserService{
    @Autowired
    private UserRepository userRepository;
    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> findAllUser() {
        return userRepository.findAll();
    }

    @Override
    public User findSpecificUser(int id) {
        Optional<User> user = userRepository.findById(id);
        return user.orElse(null);
    }

    @Override
    public User updateUser(User user, int id) {
        return userRepository.findById(id).map(user1 -> {
            user1.setFname(user.getFname());
            user1.setLname(user.getLname());
            user1.setAddress(user.getAddress());
            user1.setEmail(user.getEmail());
            user1.setPassword(user.getPassword());
            user1.setIsVerified(user.getIsVerified());
            user1.setProfileImage(user.getProfileImage());
            user1.setPhoneNo(user.getPhoneNo());
            user1.setMemberType(user.getMemberType());
            user1.setRegData(user.getRegData());
            user1.setRemovedStaffID(user.getRemovedStaffID());
            user1.setRemovedDate(user.getRemovedDate());
            user1.setSuspendedStaffID(user.getSuspendedStaffID());
            user1.setSuspendedDate(user.getSuspendedDate());
            user1.setRemark(user.getRemark());
            return userRepository.save(user1);
        }).orElse(null);
    }

    @Override
    public boolean deleteUser(int id) {
        userRepository.deleteById(id);
        return true;
    }
}
