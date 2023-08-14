package com.MHunter.mhunter.struct;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class EventOrganizer {
    private int eventId;
    private String organizerName;
    private LocalDate date;
    private String eventType;
    private String place;
}
