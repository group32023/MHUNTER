package com.MHunter.mhunter.struct;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Time;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserNotificationDetails {
    private String userName;
    private String img;
    private String title;
    private String message;
    private long time;
}
