package com.MHunter.mhunter.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalDate;
import java.time.LocalTime;


@Entity
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int EventID;
    private int OrgID;
    private String EventName;
    private String EventType;
    private String Location;
    private String Description;
    private LocalDate Date;
    private LocalTime StartTime;
    private LocalTime EndTime;
    private String image;
    private int Crowd;


    public Event() {
    }

    public int getEventID() {
        return EventID;
    }

    public int getOrgID() {
        return OrgID;
    }

    public String getEventName() {
        return EventName;
    }

    public String getEventType() {
        return EventType;
    }

    public String getLocation() {
        return Location;
    }

    public String getDescription() {
        return Description;
    }

    public LocalDate getDate() {
        return Date;
    }

    public LocalTime getStartTime() {
        return StartTime;
    }

    public LocalTime getEndTime() {
        return EndTime;
    }

    public String getImage() {
        return image;
    }

    public int getCrowd() {
        return Crowd;
    }

    public void setEventID(int eventID) {
        EventID = eventID;
    }

    public void setOrgID(int orgID) {
        OrgID = orgID;
    }

    public void setEventName(String eventName) {
        EventName = eventName;
    }

    public void setEventType(String eventType) {
        EventType = eventType;
    }

    public void setLocation(String location) {
        Location = location;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public void setDate(LocalDate date) {
        Date = date;
    }

    public void setStartTime(LocalTime startTime) {
        StartTime = startTime;
    }

    public void setEndTime(LocalTime endTime) {
        EndTime = endTime;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public void setCrowd(int crowd) {
        Crowd = crowd;
    }
}
