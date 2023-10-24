package com.MHunter.mhunter.controller;

import com.MHunter.mhunter.model.Invoice;
import com.MHunter.mhunter.model.RequestMusicMember;
import com.MHunter.mhunter.service.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@CrossOrigin
@RequestMapping("/invoice")

public class InvoiceController {

    @Autowired
    private InvoiceService invoiceService;


    @PostMapping("/add")
    public String save(@RequestBody Invoice data){
        System.out.println(data);
        invoiceService.saveInvoice(data);
        return "added";
    }

    @GetMapping("/findInvoice/{mmid}/{eventid}")
    public int getInvoice(@PathVariable int mmid, @PathVariable int eventid){
        return invoiceService.getInvoiceIdForEvent(mmid,eventid);
    }
}
