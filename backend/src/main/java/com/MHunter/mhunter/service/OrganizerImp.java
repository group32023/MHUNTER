package com.MHunter.mhunter.service;


import com.MHunter.mhunter.model.Organizer;
import com.MHunter.mhunter.repository.OrganizerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrganizerImp implements OrganizerService{
    @Autowired
    private OrganizerRepository organizerRepository;


    @Override
    public Organizer findSpecificOrganizer(int orgId) {
        return organizerRepository.findByOrgId(orgId);
    }

    @Override
    public List<Organizer> findAllOrganizer() {
        return organizerRepository.findAll();
    }

    @Override
    public Organizer findSpecificOrganizerByUserID(int user_id){

        return organizerRepository.findOrganizerUserId(user_id);
    }
}
