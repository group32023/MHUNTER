package com.MHunter.mhunter.controller;

import ch.qos.logback.core.net.SyslogOutputStream;
import com.MHunter.mhunter.model.BookedList;
import com.MHunter.mhunter.model.Invoice;
import com.MHunter.mhunter.service.BookedListService;
import com.MHunter.mhunter.service.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/requestsLog")
public class BookedListController {
   @Autowired
    private BookedListService bookedListService;


   @PostMapping("/save")
   public String save(@RequestBody BookedList data){
       System.out.println(data);
       bookedListService.saveBooking(data);
       return "added";
   }

   @GetMapping("/viewLogs/{mmid}")
    public List<BookedList> viewRequestsLogDetails(@PathVariable int mmid){
       System.out.println("Sandali");
       return bookedListService.viewRequestsLog(mmid);
   }

}
