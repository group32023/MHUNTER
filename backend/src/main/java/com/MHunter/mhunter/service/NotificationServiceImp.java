package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Notification;
import com.MHunter.mhunter.repository.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class NotificationServiceImp implements NotificationService{
    @Autowired
    public NotificationRepository notificationRepository;
    @Override
    public Notification addNotification(Notification notification) {
        return notificationRepository.save(notification);
    }


    @Override
    public Notification viewSpecificNotificationByNotificationID(int notificationId) {
        return notificationRepository.findById(notificationId).orElse(null);
    }

    @Override
    public List<Notification> viewNotification() {
        return notificationRepository.findAll();
    }

    public Notification saveNotification(Notification notification) {

        System.out.println("Event before save: " + notification);

        return notificationRepository.save(notification);

    }

}
