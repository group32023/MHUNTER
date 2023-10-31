package com.MHunter.mhunter.repository;

import com.MHunter.mhunter.model.UserNotification;
import com.MHunter.mhunter.model.UserNotificationId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserNotificationRepository extends JpaRepository<UserNotification, UserNotificationId> {
    @Query(value = "SELECT * FROM user_notification WHERE user_id = :user_id", nativeQuery = true)
    List<UserNotification> getNotificationId(@Param("user_id") int user_id);

    @Query(value = "SELECT COUNT(*) FROM user_notification WHERE user_id = :user_id AND seen= 0", nativeQuery = true)
    int getNoOfUnSeenNotifications(@Param("user_id") int user_id);
}
