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
        return  userRepository.findByUserId(id);
    }

    @Override
    public User updateUser(User user, int id) {
        return userRepository.findById(id).map(user1 -> {
            user1.setFirstName(user.getFirstName());
            user1.setLastName(user.getLastName());
            user1.setAddress(user.getAddress());
            user1.setEmail(user.getEmail());
            user1.setPassword(user.getPassword());
            user1.setIsVerified(user.getIsVerified());
            user1.setImage(user.getImage());
            user1.setPhoneNumber(user.getPhoneNumber());
//            user1.setMemberType(user.get());
            user1.setRegDate(user.getRegDate());
            user1.setRemoveStaffId(user.getRemoveStaffId());
            user1.setRemoveDate(user.getRemoveDate());
            user1.setSuspendedStaffId(user.getSuspendedStaffId());
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
