package com.MHunter.mhunter.repository;
import java.util.List;

import com.MHunter.mhunter.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends JpaRepository<Event,Integer> {

    List<Event> findByorgid(int orgID);

}
