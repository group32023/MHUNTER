package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Event;
import com.MHunter.mhunter.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventServiceImpl implements EventService{

    @Autowired
    private EventRepository eventRepository;
    @Override
    public Event saveEvent(Event event) {

        System.out.println("Event before save: " + event);
        Event savedEvent = eventRepository.save(event);
        return savedEvent;

    }

    @Override
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    @Override
    public List<Event> viewSpecificEvent(int eventId) {
        return EventRepository.find

    }


}
