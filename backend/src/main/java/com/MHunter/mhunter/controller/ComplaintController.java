package com.MHunter.mhunter.controller;

import com.MHunter.mhunter.model.Complaint;
import com.MHunter.mhunter.service.ComplaintService;
import com.MHunter.mhunter.service.UpdateComplaintRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000") // Replace with your frontend's URL

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
    public ResponseEntity<List<Complaint>> getAllComplaints() {
        List<Complaint> complaints = complaintService.getAllComplaints();
        if (complaints.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(complaints);
    }
    @GetMapping("/complaintByOrgId/{orgId}")
    public ResponseEntity<List<Complaint>> getComplaintsByOrgId(@PathVariable Integer orgId) {
        List<Complaint> complaints = complaintService.getComplaintsByOrgId(orgId);
        if (complaints.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(complaints);
    }
    @GetMapping("/complaintByComplaintID/{complaintID}")
    public ResponseEntity<List<Complaint>> getComplaintsByComplaintID(@PathVariable int complaintID) {
        List<Complaint> complaints = complaintService.getComplaintsByComplaintID(complaintID);
        if (complaints.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(complaints);
    }

//    @PutMapping("/update/{complaintID}")
//    public Complaint updateComplaint(@PathVariable int complaintID, @RequestBody Complaint complaint) {
//        complaint.setComplaintID(complaintID);
//        return complaintService.updateComplaint(complaint);
//    }

    @PutMapping("/update/{complaintID}")
    public ResponseEntity<Complaint> updateComplaint(
            @PathVariable int complaintID, @RequestBody UpdateComplaintRequest request) {
        Complaint updatedComplaint = complaintService.updateComplaint(complaintID, request);
        if (updatedComplaint == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(updatedComplaint);
    }

}
