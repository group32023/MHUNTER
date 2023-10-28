package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.BandAgreement;
import com.MHunter.mhunter.repository.BandAgreementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BandAgreementServiceImp implements BandAgreementService{

    @Autowired
    private BandAgreementRepository bandAgreementRepository;

    @Override
    public BandAgreement saveAgreement(BandAgreement bandAgreement) {
       return bandAgreementRepository.save(bandAgreement);

    }

    @Override
    public int getAgreementForEvent(int mmid, int eventid) {
        return bandAgreementRepository.getAgreementId(mmid,eventid);
    }
}
