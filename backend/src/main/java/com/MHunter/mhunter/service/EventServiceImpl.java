package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Event;
import com.MHunter.mhunter.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class EventServiceImpl implements EventService {

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
    public Event viewSpecificEvent(int eventid) {
        Optional<Event> event = eventRepository.findById(eventid);
        return event.orElse(null);
    }

    @Override
    public List<Event> getSpecificEventByDate(LocalDate date) {
        return eventRepository.findByDate(date);
    }

    @Override
    public List<Event> getEventsForHome() {
        return eventRepository.findUpcomingEventsForEventHome();
    }
}