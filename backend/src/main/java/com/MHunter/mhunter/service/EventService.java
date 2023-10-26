package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Complaint;
import com.MHunter.mhunter.model.Event;
import com.MHunter.mhunter.model.IncomeArtist;

import java.time.LocalDate;
import java.util.List;

public interface EventService {

    public Event saveEvent(Event event);
    public List<Event> getAllEvents();

    public Event viewSpecificEvent(int eventid);

    public List<Event> getSpecificEventByDate(LocalDate date);

    public List<Event> getEventsByOrgID(Integer OrgID);


    public List<Event> getEventsByeventid(Integer eventid);

//    public List<Event> getConfirmationStatusByEventIdOrgId(Integer eventid, Integer OrgID);


}
