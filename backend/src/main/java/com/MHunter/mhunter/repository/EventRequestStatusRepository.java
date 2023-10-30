//package com.MHunter.mhunter.repository;
//
//
//import com.MHunter.mhunter.model.RequestMusicMember;
//import com.MHunter.mhunter.struct.EventRequestStatus;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.stereotype.Repository;
//
//import java.util.List;
//
//@Repository
//public interface EventRequestStatusRepository extends JpaRepository<RequestMusicMember,Integer>{
//    @Query("SELECT rmm.mmid, rmm.org_id, rmm.confirmation_status, rmm.event_id, mm.user_id, CONCAT(u.firstName, ' ', u.lastName) AS fullName FROM RequestMusicMember AS rmm JOIN MusicMember AS mm ON rmm.mmid = mm.mmid JOIN User AS u ON mm.userId = u.userId WHERE rmm.orgId = 9 AND rmm.eventId = 26")
//    List<EventRequestStatus> findEventRequestStatus();
//
//}
