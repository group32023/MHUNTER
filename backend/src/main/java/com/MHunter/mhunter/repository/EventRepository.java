package com.MHunter.mhunter.repository;


import com.MHunter.mhunter.model.Event;
import com.MHunter.mhunter.model.IncomeArtist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event,Integer> {

    @Query(value = "SELECT * FROM event WHERE date = :date ", nativeQuery = true)
    List<Event> findByDate(LocalDate date);

    @Query(value = "SELECT * FROM event e INNER JOIN request_music_member rmm on e.eventid = rmm.event_id WHERE e.date = :date AND rmm.mmid = :mmid  ",nativeQuery = true)
    List<Event> viewMusicMemberEventsOnDate(@Param("mmid") Integer mmid, @Param("date") LocalDate date);
}
