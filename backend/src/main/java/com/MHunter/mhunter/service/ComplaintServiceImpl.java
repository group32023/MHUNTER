package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Complaint;
import com.MHunter.mhunter.repository.ComplaintRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ComplaintServiceImpl implements ComplaintService {

    @Autowired
    private ComplaintRepository complaintRepository;

    @Override
    public Complaint saveComplaint(Complaint complaint) {
        return complaintRepository.save(complaint);
    }

    @Override
    public List<Complaint> getComplaintsByOrgId(Integer orgId) {
        return complaintRepository.findByOrgId(orgId);
    }

//    @Override
//    public List<Complaint> getAllComplaints() {
//        return complaintRepository.findAll();
//    }
}
