package com.MHunter.mhunter.repository;

import com.MHunter.mhunter.model.StripePayment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StripePaymentRepository extends JpaRepository<StripePayment,Integer> {

    @Query(value = "SELECT * FROM stripe_payment WHERE artist_id = :artist_id ", nativeQuery = true)
    List<StripePayment> findByArtistId(int artist_id);

    @Query(value = "SELECT * FROM stripe_payment WHERE payment_intent = :payment_intent ", nativeQuery = true)
    List<StripePayment> findByAPaymentIntent(String payment_intent);
}
