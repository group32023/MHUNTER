package com.MHunter.mhunter.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class RequestMusicMember {
    @EmbeddedId
    private IncomeArtistId id;
    private int orgId;
    @Column(columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime requestDate;
    private byte confirmationStatus;
    private LocalDateTime confirmedDate;



}
