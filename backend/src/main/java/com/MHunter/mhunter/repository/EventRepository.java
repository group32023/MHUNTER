package com.MHunter.mhunter.repository;


import com.MHunter.mhunter.model.Event;
import com.MHunter.mhunter.model.IncomeArtist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event,Integer> {



    List<Event> findByEventid(int eventid);
}
