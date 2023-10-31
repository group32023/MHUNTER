package com.MHunter.mhunter.controller;

import com.MHunter.mhunter.model.Notification;
import com.MHunter.mhunter.model.User;
import com.MHunter.mhunter.service.NotificationService;
import com.MHunter.mhunter.service.UserNotificationService;
import com.MHunter.mhunter.service.UserService;
import com.MHunter.mhunter.struct.UserNotificationDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/notification")
public class NotificationController {
    @Autowired
    public NotificationService notificationService;

    @Autowired
    public UserNotificationService userNotificationService;

    @Autowired
    public UserService userService;

    @PostMapping("/add")
    public String addNotification(@RequestBody Notification notification){
        notificationService.addNotification(notification);
        return "Notification Send";
    }

    @PutMapping("/seen/{userId}")
    public String seenNotification(@PathVariable int userId){
         userNotificationService.update(userId);
         return "Updated";
    }

    @GetMapping("/unseen/{userId}")
    public int noOfUnseenNotification(@PathVariable int userId){
        return userNotificationService.countOfUnSeenNotification(userId);
    }

    @GetMapping("/view/{userId}")
    public List<UserNotificationDetails> findUserIds(@PathVariable int userId){
        List<UserNotificationDetails> notificationList = new ArrayList<>();
        userNotificationService.getNotificationIdFindByUserId(userId).forEach(res->{
            LocalDate toDay = LocalDate.now();
            LocalDate date = LocalDate.parse(res.getDate().toString());
            if(date.equals(toDay)){
                UserNotificationDetails notification = new UserNotificationDetails();

                notification.setImg(userService.findSpecificUser(res.getUser().getUserId()).getImagePath());

                notification.setUserName(userService.findSpecificUser(res.getUser().getUserId()).getFirstName()
                        +" "+userService.findSpecificUser(res.getUser().getUserId()).getLastName());

                notification.setMessage(notificationService.viewSpecificNotificationByNotificationID(
                        res.getUserNotificationId().
                                getNotification().getNotificationId()).getMessage());

                notification.setTitle(notificationService.viewSpecificNotificationByNotificationID(
                        res.getUserNotificationId().
                                getNotification().getNotificationId()).getTitle());

                LocalTime localTime = LocalTime.now();
                LocalTime time =res.getTime().toLocalTime();
                Duration duration = Duration.between(time, localTime);
                notification.setTime(duration.toMinutes());;

                notificationList.add(notification);
            }
        });
        return notificationList;
    }
}
