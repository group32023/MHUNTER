package com.MHunter.mhunter.controller;

import com.MHunter.mhunter.model.Complaint;
import com.MHunter.mhunter.service.ComplaintService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/complaint")
public class ComplaintController {
    @Autowired

    private ComplaintService complaintService;

    @PostMapping("/add")
    public String add(@RequestBody Complaint complaint){
        complaintService.saveComplaint(complaint);
        return "New Complaint Added";
    }

    @GetMapping("/getAll")
    public List<Complaint> getAllComplaints(){
        return complaintService.getAllComplaints();
    }
}
