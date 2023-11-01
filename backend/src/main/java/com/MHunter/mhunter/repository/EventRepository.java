package com.MHunter.mhunter.repository;


import com.MHunter.mhunter.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event,Integer> {

    @Query(value = "SELECT * FROM event WHERE orgid = :OrgID ", nativeQuery = true)
    List<Event> findByOrgID(Integer OrgID);

    @Query(value = "SELECT * FROM event WHERE eventid = :eventid ", nativeQuery = true)
    List<Event> findByeventid(Integer eventid);

    @Query(value = "SELECT * FROM event WHERE date = :date ", nativeQuery = true)
    List<Event> findByDate(LocalDate date);

    @Query(value = "SELECT * FROM event WHERE date > CURRENT_DATE ORDER BY date DESC LIMIT 5 ", nativeQuery = true)
    List<Event> findUpcomingEventsForEventHome();
    
    @Query(value = "SELECT * FROM event WHERE orgid = :orgid AND date<CURDATE() ORDER BY date DESC",nativeQuery = true)
    List<Event>viewPastEvents(@Param("orgid") int orgid);

    @Query(value = "SELECT * FROM event e INNER JOIN request_music_member rmm on e.eventid = rmm.event_id WHERE e.date = :date AND rmm.mmid = :mmid  ",nativeQuery = true)
    List<Event> viewMusicMemberEventsOnDate(@Param("mmid") Integer mmid, @Param("date") LocalDate date);

    @Query(value = "SELECT * FROM event WHERE date > CURRENT_DATE ORDER BY date ASC", nativeQuery = true)
    List<Event> findUpcomingEvents();
}
