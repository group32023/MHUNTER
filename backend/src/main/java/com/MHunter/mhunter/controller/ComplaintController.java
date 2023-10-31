package com.MHunter.mhunter.controller;

import com.MHunter.mhunter.model.Complaint;
import com.MHunter.mhunter.service.ComplaintService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/complaint")
@CrossOrigin
public class ComplaintController {
    @Autowired
    private ComplaintService complaintService;

    @PostMapping("/add")
    public String add(@RequestBody Complaint complaint){
        complaintService.saveComplaint(complaint);
        return "New Complaint Added";
    }

//  @GetMapping("/getAll")
//   public List<Complaint> getAllComplaints(){
//     return complaintService.getAllComplaints();
//  }
//@GetMapping("/getAll/{id}")
//public ResponseEntity<List<Complaint>> getAllComplaints(@PathVariable Integer id)  {
//    List<Complaint> complaints = complaintService.getAllComplaints();
//    if (complaints.isEmpty()) {
//        return ResponseEntity.notFound().build();
//    }
//    return ResponseEntity.ok(complaints);
//}
    @GetMapping("/complaintByOrgId/{orgId}")
    public ResponseEntity<List<Complaint>> getComplaintsByOrgId(@PathVariable Integer orgId) {
        List<Complaint> complaints = complaintService.getComplaintsByOrgId(orgId);
        if (complaints.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(complaints);
    }
}
