package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Band;
import com.MHunter.mhunter.repository.BandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BandServiceImp implements BandService {
    @Autowired
    private BandRepository bandRepository;
    @Override
    public List<Band> viewAllBands() {
        return bandRepository.findAll();
    }
}
