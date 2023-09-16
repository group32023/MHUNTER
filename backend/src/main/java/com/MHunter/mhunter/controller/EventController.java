package com.MHunter.mhunter.controller;


import com.MHunter.mhunter.model.Event;
import com.MHunter.mhunter.model.Organizer;
import com.MHunter.mhunter.model.User;
import com.MHunter.mhunter.service.EventService;
import com.MHunter.mhunter.service.OrganizerService;
import com.MHunter.mhunter.service.RequestMusicMemberService;
import com.MHunter.mhunter.service.UserService;
import com.MHunter.mhunter.struct.EventOrganizer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@CrossOrigin (origins = "*")
@RestController
@RequestMapping("/event")

public class EventController {

    @Autowired
    private EventService eventService;
    @Autowired
    private RequestMusicMemberService requestMusicMemberService;

    @Autowired
    private  OrganizerService organizerService;

    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public String add(@RequestBody Event event) {

//          return "added";
        System.out.println("Event before save: " + event);
        eventService.saveEvent(event);
         return "added";
    }

    @GetMapping("/getAll")
    public List<Event> getAllEvents(){

        return eventService.getAllEvents();
    }

    @GetMapping("/musicMemberEventsOnDate/{mmid}/{date}")
    public List<Event> viewMusicMemberEventsOnDate(@PathVariable int mmid, @PathVariable LocalDate date){

        return eventService.viewMusicMemberEventsOnDate(mmid,date);
    }


    @GetMapping("/viewEventHistory/{orgid}")
    public List<Event>viewPastEvents(@PathVariable int orgid){

        return eventService.viewPastEvents(orgid);
    }


    @GetMapping("/viewSpecificEvent/{eventId}")
    public EventOrganizer viewSpecificEvent(@PathVariable int eventId) {
        Event event = eventService.viewSpecificEvent(eventId);
        Organizer organizer = organizerService.findSpecificOrganizer(event.getOrgID());
        User user = userService.findSpecificUser(organizer.getUser().getUserId());
        EventOrganizer eventOrganizer = new EventOrganizer();
        eventOrganizer.setEventId((event.getEventID()));
        eventOrganizer.setOrgId(event.getOrgID());
        eventOrganizer.setDescription(event.getDescription());
        eventOrganizer.setLatitude(event.getLatitude());
        eventOrganizer.setLongitude(event.getLongitude());
        eventOrganizer.setLocation(event.getLocation());
        eventOrganizer.setEndTime((LocalTime) event.getEnd_time());
        eventOrganizer.setTown(event.getTown());
        eventOrganizer.setOrganizerName(user.getFirstName() + " " + user.getLastName());
        eventOrganizer.setEventName(event.getEvent_name());
        eventOrganizer.setStartTime(event.getStart_time());
        eventOrganizer.setEventType(event.getEvent_type());
        eventOrganizer.setPlace(event.getTown());
        eventOrganizer.setDate(event.getDate());
        eventOrganizer.setCrowd(event.getCrowd());
        Duration difference = Duration.between(event.getStart_time(), event.getEnd_time());
        long hours = difference.toHours();
        long minutes = difference.toMinutes() % 60;
        if (minutes == 0) {
            eventOrganizer.setDuration(hours + " hours ");

        } else {
            eventOrganizer.setDuration(hours + " hours and " + minutes + " minutes");

        }

        return eventOrganizer;


    }

    @GetMapping("/findEvent/{date}")
    public List<Event> getSpecificEventByDate(@PathVariable LocalDate date){
        return eventService.getSpecificEventByDate(date);
    }
}
