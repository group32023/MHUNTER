package com.MHunter.mhunter.controller;

import com.MHunter.mhunter.model.BandAgreement;
import com.MHunter.mhunter.model.Invoice;
import com.MHunter.mhunter.service.BandAgreementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
}
