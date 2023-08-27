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

public class BookedList {

    @Id /*id can only use for primitive data types */
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bookedId;


    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "invoice_id")
    private Invoice invoice;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "org_id")
    private Organizer organizer;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "eventid")
    private Event event;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "mmid")
    private MusicMember musicMember;

    private String requestState="Confirmed";

    @Column(columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime date;
}

