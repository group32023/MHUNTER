package com.MHunter.mhunter.controller;

import com.MHunter.mhunter.model.Event;
import com.MHunter.mhunter.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/event")
public class EventController {

    @Autowired
    private EventService eventService;

    @PostMapping("/add")
    public ResponseEntity<String> add(@RequestBody Event event) {
        try {
            System.out.println("Event before save: " + event);
            Event savedEvent = eventService.saveEvent(event);
            // Return a success response with a 200 status code
            return ResponseEntity.ok("Event added successfully");
        } catch (RuntimeException e) {
            // Log the exception for debugging purposes
            e.printStackTrace();
            // Return an error response with a 500 status code
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding event: " + e.getMessage());
        }
    }
}