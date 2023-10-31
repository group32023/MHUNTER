package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Artist;
import com.MHunter.mhunter.model.Band;

import java.util.List;

public interface BandService {
    public List<Band> viewAllBands();
    public List<Band> getAllBands();
    public Band findSpecificBand(int id);

    public Band findByMMID(int mmid);
}
