package com.MHunter.mhunter.repository;

import com.MHunter.mhunter.model.MusicMember;
import com.MHunter.mhunter.model.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NotificationRepositary extends JpaRepository<Notification,Integer> {

}
