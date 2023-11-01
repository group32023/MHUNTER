package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.MusicMember;
import com.MHunter.mhunter.model.Organizer;

import java.util.List;


public interface OrganizerService {

    public Organizer findSpecificOrganizer(int orgId);
    public List<Organizer> findAllOrganizer();
    public Organizer findSpecificOrganizerByUserID(int user_id);

}
