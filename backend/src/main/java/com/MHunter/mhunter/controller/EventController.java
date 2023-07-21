package com.MHunter.mhunter.controller;


import com.MHunter.mhunter.model.Event;
import com.MHunter.mhunter.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
}
