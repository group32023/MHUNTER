package com.MHunter.mhunter.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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


    private int invoiceId;


    private int agreementId;


    private int orgId;


    private int eventid;


    private int mmid;

    private String requestState="Processing";

    @Column(columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime date;
}

