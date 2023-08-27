package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Event;
import com.MHunter.mhunter.model.IncomeArtist;

import java.time.LocalDate;
import java.util.List;

public interface EventService {

    public Event saveEvent(Event event);
    public List<Event> getAllEvents();

    public Event viewSpecificEvent(int eventid);

    public Event getSpecificEventByDate(LocalDate date);

}
