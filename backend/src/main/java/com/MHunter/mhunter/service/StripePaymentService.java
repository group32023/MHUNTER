package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Invoice;
import com.MHunter.mhunter.model.StripePayment;

import java.util.List;

public interface StripePaymentService {
    public StripePayment savePaymentDetails(StripePayment data);

    public List<StripePayment> getPaymentsByArtistId(int artist_id);
    public List<StripePayment> getPaymentsByPaymentIntent(String payment_intent);
    public  StripePayment updateRefundAmount(String paymentIntent, Long refundAmount);

}
