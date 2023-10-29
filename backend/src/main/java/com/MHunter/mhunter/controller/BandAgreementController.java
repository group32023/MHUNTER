package com.MHunter.mhunter.controller;

import com.MHunter.mhunter.model.BandAgreement;
import com.MHunter.mhunter.model.Event;
import com.MHunter.mhunter.model.Invoice;
import com.MHunter.mhunter.service.BandAgreementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/bandAgreement")
public class BandAgreementController {

    @Autowired
    private BandAgreementService bandAgreementService;

    @PostMapping("/add")
    public String save(@RequestBody BandAgreement data){
        bandAgreementService.saveAgreement(data);
        return "added";
    }


    @GetMapping("/findAgreement/{mmid}/{eventid}")
    public int getAgreement(@PathVariable int mmid, @PathVariable int eventid){
        return bandAgreementService.getAgreementForEvent(mmid,eventid);
    }

    @GetMapping("/findAllInAgreement/{mmid}/{eventid}")
    public BandAgreement getAllInAgreement(@PathVariable int mmid, @PathVariable int eventid){
        return bandAgreementService.getAllInAgreementForEvent(mmid,eventid);
    }
}
