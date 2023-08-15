package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Event;

import java.util.List;

public interface EventService {

    public Event saveEvent(Event event);
    public List<Event> getAllEvents();
    public Event viewSpecificEvent(int eventid);
}
