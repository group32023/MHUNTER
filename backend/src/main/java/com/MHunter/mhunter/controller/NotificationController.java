package com.MHunter.mhunter.controller;


import com.MHunter.mhunter.model.Event;
import com.MHunter.mhunter.model.Notification;
import com.MHunter.mhunter.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/notification")

public class NotificationController {

    @Autowired
    private NotificationService notificationService;

    @PostMapping("/send")
    public String add(@RequestBody Notification notification) {

//          return "added";
        System.out.println("Event before save: " + notification);
        notificationService.saveNotification(notification);
        return "added";
    }
}
