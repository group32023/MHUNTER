package com.MHunter.mhunter.controller;

import com.MHunter.mhunter.model.*;
import com.MHunter.mhunter.service.InvoiceService;
import com.MHunter.mhunter.service.InvoiceServiceImp;
import com.MHunter.mhunter.service.StripePaymentService;
import com.stripe.Stripe;
import com.stripe.exception.SignatureVerificationException;
import com.stripe.exception.StripeException;
import com.stripe.model.Event;
import com.stripe.model.PaymentIntent;
import com.stripe.model.Refund;
import com.stripe.net.Webhook;
import com.stripe.param.PaymentIntentCreateParams;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import com.stripe.param.RefundCreateParams;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin()
public class PaymentGatewayController {
    @Value("${stripe.api.secretKey}")
    private String stripeApiKey;

    @Autowired
    private StripePaymentService paymentService;
    @Autowired
    private InvoiceService invoiceService;

    @PostMapping("/create-payment-intent")
    public StripeResponse createPaymentIntent(@RequestBody StripeRequest request)
            throws StripeException {
        PaymentIntentCreateParams params =
                PaymentIntentCreateParams.builder()
                        .setAmount(request.getAmount() * 100L)
                        .putMetadata("productName",
                                request.getProductName())
                        .setCurrency("usd")
                        .setAutomaticPaymentMethods(
                                PaymentIntentCreateParams
                                        .AutomaticPaymentMethods
                                        .builder()
                                        .setEnabled(true)
                                        .build()
                        )
                        .build();

        PaymentIntent intent =
                PaymentIntent.create(params);

        return new StripeResponse(intent.getId(),
                intent.getClientSecret());
    }

    @PostMapping("/success-Payment")
    public String succsessPaymentIntent(@RequestBody StripePayment request){


        // Create a Payment entity and populate it with data
        StripePayment payment = new StripePayment();
        payment.setArtist_id(request.getArtist_id());
        payment.setPaymentType(request.getPaymentType());
        payment.setPaymentIntent(request.getPaymentIntent());
        payment.setAmount(request.getAmount());
        payment.setOrgId(request.getOrgId());
        payment.setPayee_name(request.getPayee_name());
        payment.setInvoiceId(request.getInvoiceId());

        // Save payment details to the database using the service
        StripePayment savedPayment = paymentService.savePaymentDetails(payment);

        // Update the paid amount for the specified invoice
        invoiceService.updatePaidAmount(request.getInvoiceId(), request.getAmount());

        return "Success";
    }

    @PostMapping("/create-refund")
    public String createRefund(@RequestBody StripeRefund refundRequestDTO) {
        Stripe.apiKey = stripeApiKey;

        RefundCreateParams params = RefundCreateParams.builder()
                .setPaymentIntent(refundRequestDTO.getPaymentIntent())
                .setAmount(refundRequestDTO.getAmount() * 100L)
                .build();

        // Update the paid amount for the specified payment
        paymentService.updateRefundAmount(refundRequestDTO.getPaymentIntent(), refundRequestDTO.getTot_amount()-refundRequestDTO.getAmount());

        try {
            Refund refund = Refund.create(params);
            return "Refund created: " + refund.getId();
        } catch (StripeException e) {
            e.printStackTrace();
            return "Refund creation failed: " + e.getMessage();
        }
    }
    @GetMapping("payment-details/by-artist/{artistId}")
    public ResponseEntity<List<StripePayment>> getPaymentsByArtistId(@PathVariable int artistId) {
        List<StripePayment> payments = paymentService.getPaymentsByArtistId(artistId);
        return ResponseEntity.ok(payments);
    }
}
