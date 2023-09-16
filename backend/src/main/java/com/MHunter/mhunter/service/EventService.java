package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Event;
import com.MHunter.mhunter.model.IncomeArtist;

import java.time.LocalDate;
import java.util.List;

public interface EventService {

    public Event saveEvent(Event event);
    public List<Event> getAllEvents();

    public List<Event>viewPastEvents(int orgid);

    public Event viewSpecificEvent(int eventid);

    public List<Event> getSpecificEventByDate(LocalDate date);

    public List<Event> viewMusicMemberEventsOnDate(int mmid,LocalDate date);
}
