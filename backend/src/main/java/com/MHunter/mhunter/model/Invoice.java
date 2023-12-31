package com.MHunter.mhunter.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Invoice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int invoiceId;
    private int mmid;
    private int eventid;
    private Double totalAmount;
    private Double bandFee;
    private Double soundFee;
    private Double instrumentFee;
    private Double transportFee;
    private Double others;
    private String paymentType;
    private Long paidAmount;
    private Double artistFee;
    @Column(columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP")
    private LocalDate date;
    private String additionalNote;


    //@Column(columnDefinition = "byte default 0")
    private int isPaid;


}
