package com.MHunter.mhunter.controller;

import com.MHunter.mhunter.model.Event;
import com.MHunter.mhunter.model.Organizer;
import com.MHunter.mhunter.model.RequestMusicMember;
import com.MHunter.mhunter.service.EventService;
import com.MHunter.mhunter.service.OrganizerService;
import com.MHunter.mhunter.service.RequestMusicMemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/pendingRequest")
public class RequestMusicMemberController {

    @Autowired
    private RequestMusicMemberService requestMusicMemberService;

    @Autowired
    private EventService eventService;

    @Autowired
    private OrganizerService organizerService;

    @PostMapping("/add")
    public String save(@RequestBody RequestMusicMember requestMusicMember){
        requestMusicMemberService.saveRequest(requestMusicMember);
        return "Added";
    }
//    @GetMapping("/specificPendingRequest/{artistId}/{eventId}")
//    public IncomeArtist specificPendingRequest(@PathVariable int artistId,@PathVariable int eventId){
//        IncomeArtistId id = new IncomeArtistId(artistId,eventId);
//        IncomeArtist request = requestMusicMemberService.updateRequest()
//        return income;
//    }

    //    find the specific arist's income list
    @GetMapping("/specificArtistPendingRequest/{artistId}")
    public List<Event> specificArtistPendingRequest(@PathVariable int artistId){
        List<Event> eventDetails=new ArrayList<Event>();
        List<Organizer> tempList= new ArrayList<>();
        List<RequestMusicMember> pendingEventRequests = requestMusicMemberService.viewSpecificPendingEventRequest(artistId);
        pendingEventRequests.forEach(pendingRequest ->
//                eventService.viewSpecificEvent(pendingRequest.getId().getEventId()).forEach(event->
//                        System.out.println(organizerService.findOrganizer(event.getOrgID()))
//                )
//                        );
        eventDetails.add(eventService.viewSpecificEvent(pendingRequest.getId().getEventId()).get(0)));
        return eventDetails;

    }

    @PutMapping("/confirmRequest/{eventId}")
    public String update(@PathVariable int eventId){
        requestMusicMemberService.updateRequest(eventId);
        return "updated";
    }



}
