package com.MHunter.mhunter.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Time;
import java.sql.Timestamp;
import java.util.Date;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserNotification {
    @EmbeddedId
    private UserNotificationId userNotificationId;
    @Temporal(TemporalType.DATE)
    private Date date;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "from_user_id")
    private User user;
    private Time time;
    private int seen;
}
