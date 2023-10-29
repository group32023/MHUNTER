package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Artist;
import com.MHunter.mhunter.model.BandAgreement;

public interface BandAgreementService {

    public BandAgreement saveAgreement(BandAgreement bandAgreement);
    public int getAgreementForEvent(int mmid, int eventid);

    public BandAgreement getAllInAgreementForEvent(int mmid, int eventid);
}
