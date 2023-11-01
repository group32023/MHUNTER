package com.MHunter.mhunter.controller;


import com.MHunter.mhunter.model.Event;
import com.MHunter.mhunter.model.Organizer;
import com.MHunter.mhunter.model.User;
import com.MHunter.mhunter.repository.EventRepository;
import com.MHunter.mhunter.service.EventService;
import com.MHunter.mhunter.service.OrganizerService;
import com.MHunter.mhunter.service.RequestMusicMemberService;
import com.MHunter.mhunter.service.UserService;
import com.MHunter.mhunter.struct.EventOrganizer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
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

    @Autowired
    private EventRepository eventRepository;

    @PostMapping("/add")
    public String add(@RequestBody Event event) {

//          return "added";
        System.out.println("Event before save: " + event);
        eventService.saveEvent(event);
         return "added";
    }

    @GetMapping("/getAll")
    public List<Event> getAllEventsForHome(){

        return eventService.getAllEvents();
    }
    @GetMapping("/getAll/{orgid}")
    public List<Event> getAllEvents(@PathVariable int orgid){

        return eventService.getEventsByOrgID(orgid);
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
        eventOrganizer.setOrganizerImage(user.getImagePath());
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

    @GetMapping("/byOrgID/{OrgID}")
    public ResponseEntity<List<Event>> getEventsByOrgId(@PathVariable Integer OrgID) {
        List<Event> events = eventService.getEventsByOrgID(OrgID);
        if (events.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(events);
    }

    @GetMapping("/byEventid/{eventid}")
    public ResponseEntity<List<Event>> getEventsByEventid(@PathVariable Integer eventid) {
        List<Event> events = eventService.getEventsByeventid(eventid);
        if (events.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(events);
    }


//    @GetMapping("/confirmationStatusByEventidOrgId/{eventid}/{OrgID}")
//    public ResponseEntity<List<Event>> getConfirmationStatusByEventidOrgId(@PathVariable Integer eventid, @PathVariable Integer OrgID) {
//        List<Event> confirmationArtists = eventService.getConfirmationStatusByEventIdOrgId(eventid, OrgID);
//        if (confirmationArtists.isEmpty()) {
//            return ResponseEntity.notFound().build();
//        }
//        return ResponseEntity.ok(confirmationArtists);
//    }



    @GetMapping("/viewEventForHome")
    public List<EventOrganizer> viewEventForHome() {

        List<Event> eventList = eventService.getEventsForHome();
        List<EventOrganizer> eventOrganizerList = new ArrayList<>();

        eventList.forEach(res ->{
            Organizer organizer = organizerService.findSpecificOrganizer(res.getOrgID());
            User user = userService.findSpecificUser(organizer.getUser().getUserId());

            EventOrganizer eventOrganizer = new EventOrganizer();
            eventOrganizer.setOrgId(res.getOrgID());
            eventOrganizer.setEventId(res.getEventID());
            eventOrganizer.setOrganizerName(user.getFirstName() + " " +  user.getLastName());
            eventOrganizer.setEventName(res.getEvent_name());
            eventOrganizer.setEventType(res.getEvent_type());
            eventOrganizer.setStartTime(res.getStart_time());
            eventOrganizer.setPlace(res.getTown());
            eventOrganizer.setDate(res.getDate());
            eventOrganizer.setCrowd(res.getCrowd());

            Duration difference = Duration.between( res.getStart_time(),res.getEnd_time());
            long hours = difference.toHours();
            long minutes = difference.toMinutes() % 60;
            if(minutes==0){
                eventOrganizer.setDuration(hours + " hours ");

            }
            else{
                eventOrganizer.setDuration(hours + " hours and " + minutes + " minutes");

            }
            eventOrganizerList.add(eventOrganizer);


            //System.out.println(eventOrganizer);
        });

        return eventOrganizerList;
    }
    @GetMapping("/allEvents")
    List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    @GetMapping("/upcomingEvents")
    public ResponseEntity<List<Event>> getUpcomingEvents() {
        List<Event> upcomingEvents = eventService.getUpcomingEvents();
        if (upcomingEvents.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(upcomingEvents);
    }

}
