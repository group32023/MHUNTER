package com.MHunter.mhunter.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class StripePayment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int stripe_id;

    private int artist_id;
    private String paymentType;
    private String paymentIntent;
    private Long amount;
    private int orgId;
    private String payee_name;
    private boolean is_refunded=false;
    private Long refunded_amount;
    private int invoiceId;
}
