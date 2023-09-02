package com.MHunter.mhunter.repository;

import com.MHunter.mhunter.model.BandAgreement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BandAgreementRepository extends JpaRepository<BandAgreement, Integer> {
}
