package com.MHunter.mhunter.model;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class RequestMusicMember {
    @EmbeddedId
    private RequestMusicMemberId requestMusicMemberId;
    private int orgId;
    @Column(columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime requestDate;
    private int confirmationStatus;

    private LocalDateTime confirmationDate;
    private int cancelStatus;
    private String reason;
    private LocalDateTime canceledDate;
    private LocalTime arrivalTime;
    private LocalTime departureTime;
    private String specialNotes;

}
