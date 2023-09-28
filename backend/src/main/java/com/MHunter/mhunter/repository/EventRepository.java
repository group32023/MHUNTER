package com.MHunter.mhunter.repository;


import com.MHunter.mhunter.model.Complaint;
import com.MHunter.mhunter.model.Event;
import com.MHunter.mhunter.model.IncomeArtist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event,Integer> {

    @Query(value = "SELECT * FROM event WHERE orgid = :OrgID ", nativeQuery = true)
    List<Event> findByOrgID(Integer OrgID);

    @Query(value = "SELECT * FROM event WHERE eventid = :eventid ", nativeQuery = true)
    List<Event> findByeventid(Integer eventid);

//    @Query(value = "SELECT rmm.mmid, rmm.org_id, rmm.event_id, rmm.confirmation_status , mm.user_id, CONCAT(u.first_name, ' ', u.last_name) AS full_name FROM request_music_member AS rmm JOIN music_member AS mm ON rmm.mmid = mm.mmid JOIN user AS u ON mm.user_id = u.user_id WHERE rmm.org_id = :OrgID AND rmm.event_id = :eventid; ", nativeQuery = true)
//    List<Event> findByOrgIdEventIdConfirmationStatus(Integer eventid , Integer OrgID);


    @Query(value = "SELECT * FROM event WHERE date = :date ", nativeQuery = true)
    List<Event> findByDate(LocalDate date);
}
