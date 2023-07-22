package com.MHunter.mhunter.model;


import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalTime;


@Entity
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "EventID")
    private int EventID;
    @Column(name = "OrgID")
    private int OrgID;
    @Column(name = "EventName")
    private String EventName;
    @Column(name = "EventType")
    private String EventType;
    @Column(name = "Location")
    private String Location;
    @Column(name = "Longitude")
    private Double Longitude;
    @Column(name = "Latitude")
    private Double Latitude;
    @Column(name = "Description")
    private String Description;
    @Column(name = "Date")
    private LocalDate Date;
    @Column(name = "StartTime")
    private LocalTime StartTime;
    @Column(name = "EndTime")
    private LocalTime EndTime;
//    @Column(name = "Image")
//    private String Image;
    @Column(name = "Crowd")
    private int Crowd;

    public Event() {
    }

    public int getEventID() {
        return EventID;
    }

    public void setEventID(int eventID) {
        EventID = eventID;
    }

    public int getOrgID() {
        return OrgID;
    }

    public void setOrgID(int orgID) {
        OrgID = orgID;
    }

    public String getEventName() {
        return EventName;
    }

    public void setEventName(String eventName) {
        EventName = eventName;
    }

    public String getEventType() {
        return EventType;
    }

    public void setEventType(String eventType) {
        EventType = eventType;
    }

    public String getLocation() {
        return Location;
    }

    public void setLocation(String location) {
        Location = location;
    }

    public Double getLongitude() {
        return Longitude;
    }

    public void setLongitude(Double longitude) {
        Longitude = longitude;
    }

    public Double getLatitude() {
        return Latitude;
    }

    public void setLatitude(Double latitude) {
        Latitude = latitude;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public LocalDate getDate() {
        return Date;
    }

    public void setDate(LocalDate date) {
        Date = date;
    }

    public LocalTime getStartTime() {
        return StartTime;
    }

    public void setStartTime(LocalTime startTime) {
        StartTime = startTime;
    }

    public LocalTime getEndTime() {
        return EndTime;
    }

    public void setEndTime(LocalTime endTime) {
        EndTime = endTime;
    }

//    public String getImage() {
//        return image;
//    }
//
//    public void setImage(String image) {
//        this.image = image;
//    }

    public int getCrowd() {
        return Crowd;
    }

    public void setCrowd(int crowd) {
        Crowd = crowd;
    }
}
