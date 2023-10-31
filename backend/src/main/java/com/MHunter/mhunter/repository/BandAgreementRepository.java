package com.MHunter.mhunter.repository;

import com.MHunter.mhunter.model.BandAgreement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BandAgreementRepository extends JpaRepository<BandAgreement, Integer> {
    @Query(value = "SELECT agreement_id FROM band_agreement WHERE mmid = :mmid and event_id= :eventid", nativeQuery = true)
    int getAgreementId(@Param("mmid") int mmid, @Param("eventid") int eventid);


     BandAgreement findByMmidAndEventId(int mmid, int eventid);
}
