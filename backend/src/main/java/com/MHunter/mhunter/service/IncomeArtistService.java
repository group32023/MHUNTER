package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.IncomeArtist;
import com.MHunter.mhunter.model.IncomeArtistId;
import org.springframework.stereotype.Service;

import java.util.List;


public interface IncomeArtistService {
    public IncomeArtist saveIncome(IncomeArtist incomeArtist);
    public List<IncomeArtist> viewIncome();
    public IncomeArtist updateIncome(IncomeArtist incomeArtist,int mmid,int eventId);
    public IncomeArtist viewSpecificIncome(IncomeArtistId id);

//    give artist income list

    public List<IncomeArtist> viewListOfArtistIncomes(int mmid);

}
