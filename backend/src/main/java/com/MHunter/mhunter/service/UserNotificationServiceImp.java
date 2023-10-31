package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.UserNotification;
import com.MHunter.mhunter.model.UserNotificationId;
import com.MHunter.mhunter.repository.UserNotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserNotificationServiceImp implements UserNotificationService{
    @Autowired
    public UserNotificationRepository userNotificationRepository;

    @Override
    public void update(int userId) {
         userNotificationRepository.getNotificationId(userId).forEach(res->{
           res.setSeen(1);
           userNotificationRepository.save(res);
        });
    }

    @Override
    public int countOfUnSeenNotification(int userId) {
        return userNotificationRepository.getNoOfUnSeenNotifications(userId);
    }

    @Override
    public List<UserNotification> getNotificationIdFindByUserId(int userId) {
        return userNotificationRepository.getNotificationId(userId);
    }
}
