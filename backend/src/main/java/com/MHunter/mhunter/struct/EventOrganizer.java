package com.MHunter.mhunter.struct;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EventOrganizer {
    private int orgId;
    private int eventId;
    private String organizerName;
    private String description;
    private double latitude;
    private double longitude;
    private String location;
    private String town;
    private LocalTime endTime;
    private LocalDate date;
    private String eventType;
    private String eventName;
    private String place;
    private LocalTime startTime;
    private int crowd;
    private String duration;
    private Double income;
}
