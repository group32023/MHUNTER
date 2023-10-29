package com.MHunter.mhunter.repository;

import com.MHunter.mhunter.model.Organizer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrganizerRepository extends JpaRepository<Organizer,Integer> {
    Organizer findByOrgId(int orgId);
    Organizer findByUserUserId(Integer userId);


}
