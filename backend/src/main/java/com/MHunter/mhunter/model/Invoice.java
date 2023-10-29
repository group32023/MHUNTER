package com.MHunter.mhunter.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Invoice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int invoiceId;
    private Double totalAmount;
    private Double bandFee;
    private Double soundFee;
    private Double instrumentFee;
    private Double transportFee;
    private Double others;
    private String paymentType;
    private Long paidAmount;
    private Double artistFee;
    private Double discount;

    //@Column(columnDefinition = "byte default 0")
    private byte isPaid;


}
