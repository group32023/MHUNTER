package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Event;
import com.MHunter.mhunter.model.Notification;
import com.MHunter.mhunter.repository.NotificationRepositary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.gson.GsonAutoConfiguration;
import org.springframework.boot.json.GsonJsonParser;
import org.springframework.stereotype.Service;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class NotificationServiceImpl implements NotificationService{

    @Autowired
    private NotificationRepositary notificationRepositary;

    @Override
    public Notification saveNotification(Notification notification) {

        System.out.println("Event before save: " + notification);

        return notificationRepositary.save(notification);

    }
}
