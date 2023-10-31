package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Notification;
import com.MHunter.mhunter.model.UserNotification;

import java.util.List;

public interface UserNotificationService {
    public List<UserNotification> getNotificationIdFindByUserId(int userId);

    public void update(int userId);

    public int countOfUnSeenNotification(int userId);
}
