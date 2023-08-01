package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.IncomeArtist;
import com.MHunter.mhunter.model.IncomeArtistId;
import com.MHunter.mhunter.repository.IncomeArtistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IncomeArtistImp implements IncomeArtistService{
    @Autowired
    private IncomeArtistRepository incomeArtistRepository;

    @Override
    public IncomeArtist saveIncome(IncomeArtist incomeArtist) {return incomeArtistRepository.save(incomeArtist);}

    @Override
    public List<IncomeArtist> viewIncome() {return incomeArtistRepository.findAll();}

    @Override
    public IncomeArtist updateIncome(IncomeArtist incomeArtist,int artistId,int eventId) {
        return null;
    }

    @Override
    public IncomeArtist viewSpecificIncome(IncomeArtistId id) {
       return incomeArtistRepository.findById(id).orElse(null);
    }

    @Override
    public List<IncomeArtist> viewListOfArtistIncomes(int artistId) {
        return incomeArtistRepository.findById_ArtistId(artistId);
    }
}
