package com.MHunter.mhunter.repository;

import com.MHunter.mhunter.model.Organizer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrganizerRepository extends JpaRepository<Organizer,Integer> {
    Organizer findByUserUserId(Integer userId);
    Organizer findByOrgId(int orgId);

}
