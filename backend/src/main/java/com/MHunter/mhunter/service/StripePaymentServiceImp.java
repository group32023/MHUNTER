package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Invoice;
import com.MHunter.mhunter.model.StripePayment;
import com.MHunter.mhunter.repository.StripePaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StripePaymentServiceImp implements StripePaymentService{
    @Autowired
    private StripePaymentRepository paymentRepository;

    @Override
    public StripePayment savePaymentDetails(StripePayment data) {
        return paymentRepository.save(data);
    }

    @Override
    public List<StripePayment> getPaymentsByArtistId(int artist_id) {
        return paymentRepository.findByArtistId(artist_id);
    }
    @Override
    public List<StripePayment> getPaymentsByPaymentIntent(String payment_intent) {
        return paymentRepository.findByAPaymentIntent(payment_intent);
    }
    @Override
    public StripePayment updateRefundAmount(String paymentIntent, Long refundAmount) {
        List<StripePayment> stripePayments = paymentRepository.findByAPaymentIntent(paymentIntent);

        if (!stripePayments.isEmpty()) {
            StripePayment payment = stripePayments.get(0);
            payment.setRefunded_amount(refundAmount);
            payment.set_refunded(true); // Use the correct field name
            return paymentRepository.save(payment); // Save and return the updated payment
        } else {
            throw new IllegalArgumentException("Invalid Payment Intent");
        }
    }
}
