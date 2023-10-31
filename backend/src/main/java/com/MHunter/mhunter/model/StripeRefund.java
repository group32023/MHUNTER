package com.MHunter.mhunter.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StripeRefund {
    private String paymentIntent;
    private Long amount;
    private Long tot_amount;
}
