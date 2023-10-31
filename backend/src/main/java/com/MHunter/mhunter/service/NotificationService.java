package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Notification;

import java.util.List;

public interface NotificationService {
    public Notification addNotification(Notification notification);
    public List<Notification> viewNotification();

    public Notification viewSpecificNotificationByNotificationID(int notificationId);

    public List<Notification> viewSpecificNotificationByMMID(int mmid);


}
