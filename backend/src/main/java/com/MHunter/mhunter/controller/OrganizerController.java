package com.MHunter.mhunter.controller;

import com.MHunter.mhunter.model.Organizer;
import com.MHunter.mhunter.service.OrganizerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/organizer")

public class OrganizerController {

    @Autowired
    private OrganizerService organizerService;

    @GetMapping("/viewSpecificOrganizer/{orgId}")
    public Organizer viewSpecificOrganizer(@PathVariable int orgId){
        return organizerService.findSpecificOrganizer(orgId);
    }



}
