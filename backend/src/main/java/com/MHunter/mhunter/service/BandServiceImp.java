package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Artist;
import com.MHunter.mhunter.model.Band;
import com.MHunter.mhunter.repository.BandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BandServiceImp implements BandService {
    @Autowired
    private BandRepository bandRepository;
    @Override
    public List<Band> viewAllBands() {
        return bandRepository.findAll();
    }

    @Override
    public List<Band> getAllBands() {
        return bandRepository.findAllBand();
    }

    @Override
    public Band findSpecificBand(int id) {

        Optional<Band> band= bandRepository.findById(id);
        return band.orElse(null);

    }
@Override
    public Band findByMMID(int mmid){
        return bandRepository.findByMmid(mmid);
    }
}
