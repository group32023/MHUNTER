package com.MHunter.mhunter.model;


import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.temporal.Temporal;


@Entity
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

//    @Column(name = "EventID")
    private int eventid;
    //    @Column(name = "OrgID")
    private int OrgID;
    //    @Column(name = "event_name")
    private String event_name;
    //    @Column(name = "event_type")
    private String event_type;
    //    @Column(name = "Location")
    private String Location;
    //    @Column(name = "Longitude")

    private String Town;
    private Double Longitude;
    //    @Column(name = "Latitude")
    private Double Latitude;
    //    @Column(name = "Description")
    private String Description;
    //    @Column(name = "Date")
    private LocalDate Date;
    //    @Column(name = "start_time")
    private LocalTime start_time;
    //    @Column(name = "end_time")
    private LocalTime end_time;





//        @Column(name = "Image")
    private String image;
//    @Column(name = "Crowd")
    private int Crowd;


    public Event() {
    }

    public int getEventID() {
        return eventid;
    }

    public void setEventID(int eventID) {
        eventid = eventID;
    }

    public int getOrgID() {
        return OrgID;
    }

    public void setOrgID(int orgID) {
        OrgID = orgID;
    }

    public String getEvent_name() {
        return event_name;
    }

    public void setEvent_name(String event_name) {
        this.event_name = event_name;
    }

    public String getEvent_type() {
        return event_type;
    }

    public void setEvent_type(String event_type) {
        this.event_type = event_type;
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

    public String getTown() {
        return Town;
    }

    public void setTown(String town) {
        Town = town;
    }

    public int getEventid() {
        return eventid;
    }

    public void setEventid(int eventid) {
        this.eventid = eventid;
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

    public LocalTime getStart_time() {
        return start_time;
    }

    public void setStart_time() {
        this.start_time = start_time;
    }

    public Temporal getEnd_time() {
        return end_time;
    }

    public void setEnd_time(LocalTime end_time) {
        this.end_time = end_time;
    }

    public int getCrowd() {
        return Crowd;
    }

    public void setCrowd(int crowd) {
        Crowd = crowd;
    }

    public String getImage(){return image;}

    public void setImage(String image){this.image = image;}

}
