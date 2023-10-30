package com.MHunter.mhunter.controller;

import com.MHunter.mhunter.model.BookedList;
import com.MHunter.mhunter.model.Invoice;
import com.MHunter.mhunter.service.BookedListService;
import com.MHunter.mhunter.service.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/invoice")

public class InvoiceController {

    @Autowired
    private InvoiceService invoiceService;

    @Autowired
    private BookedListService bookedListService;


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

    @GetMapping("/findAllInInvoice/{mmid}/{eventid}")
    public Invoice getAllInInvoice(@PathVariable int mmid, @PathVariable int eventid){
        return invoiceService.getAllInInvoice(mmid,eventid);
    }

    @GetMapping("/getAllByOrgId/{OrgId}")
    public List<Invoice> viewAllInInvoiceById(@PathVariable int OrgId){
        List<BookedList> bookedLists = bookedListService.getAllByOrgIdRequestLogs(OrgId);
        List<Invoice> invoices = new ArrayList<>();
        List<Object[]> results = new ArrayList<>();
        for(BookedList bookedList : bookedLists){
            Object[] result = new Object[] { bookedList.getInvoiceId() };
            results.add(result);
        }

        for (Object[] result : results) {
            if (result.length > 0) {
                Integer invoiceId = (Integer) result[0];
                Invoice invoice = invoiceService.getAllInInvoiceById(invoiceId);

                if (invoice != null) {
                    invoices.add(invoice);
                }
            }
        }

        return invoices;

    }
}
