package com.MHunter.mhunter.controller;


import com.MHunter.mhunter.model.Event;
import com.MHunter.mhunter.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin (origins = "*")
@RestController
@RequestMapping("/event")
public class EventController {

    @Autowired
    private EventService eventService;

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

    @GetMapping("/viewSpecificEvent/{eventId}")
    public List<Event> viewSpecificEvent(@PathVariable int eventId){
        System.out.println(
                eventId
        );
        return eventService.viewSpecificEvent(eventId);

    }
}
