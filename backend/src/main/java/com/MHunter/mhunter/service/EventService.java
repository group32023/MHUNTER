package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Event;
import com.MHunter.mhunter.model.IncomeArtist;

import java.util.List;

public interface EventService {

    public Event saveEvent(Event event);
    public List<Event> getAllEvents();

    public List<Event> viewSpecificEvent(int eventid);

}
