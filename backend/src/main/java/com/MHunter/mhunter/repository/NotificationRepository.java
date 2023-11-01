package com.MHunter.mhunter.repository;

import com.MHunter.mhunter.model.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NotificationRepository extends JpaRepository<Notification,Integer> {
    @Query(value = "SELECT * FROM notification WHERE mmids = :mmid" , nativeQuery = true)
    List<Notification> findByMMID(@Param("mmid") int mmid);

}
