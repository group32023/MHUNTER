package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Event;
import com.MHunter.mhunter.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EventServiceImpl implements EventService {

    @Autowired
    private EventRepository eventRepository;

    @Override
    public Event saveEvent(Event event) {
        try {
            System.out.println("Event before save: " + event);
            Event savedEvent = eventRepository.save(event);
            return savedEvent;
        } catch (Exception e) {
            // You can log the exception for debugging purposes
            e.printStackTrace();
            // You can also throw a custom exception or return an error message to the controller
            throw new RuntimeException("Failed to save event: " + e.getMessage());
        }
    }
}