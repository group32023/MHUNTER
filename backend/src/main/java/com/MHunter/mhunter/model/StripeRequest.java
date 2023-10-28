package com.MHunter.mhunter.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StripeRequest {
    private Long amount;
    private String email;
    private String productName;
    private int artist_id;
    private String paymentType;
    private int orgId;
    private String payee_name;
    private int invoiceId;
}

