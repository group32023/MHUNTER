package com.MHunter.mhunter.service;


import com.MHunter.mhunter.model.IncomeArtist;
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
    public Organizer findOrganizer(int orgId) {
        return organizerRepository.findByorgId(orgId);
    }
}
