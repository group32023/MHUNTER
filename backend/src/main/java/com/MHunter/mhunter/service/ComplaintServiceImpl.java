package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Complaint;
import com.MHunter.mhunter.repository.ComplaintRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
    @Override
    public List<Complaint> getComplaintsByComplaintID(int complaintID) {
        return complaintRepository.findByComplaintID(complaintID);
    }

    @Override
    public Complaint updateComplaint(int complaintID, UpdateComplaintRequest request) {
        Optional<Complaint> optionalComplaint = complaintRepository.findById(complaintID);
        if (optionalComplaint.isPresent()) {
            Complaint complaint = optionalComplaint.get();

            // Update both status and remark
            if (request.getStatus() != null) {
                complaint.setStatus(request.getStatus());
            }
            if (request.getRemark() != null) {
                complaint.setRemark(request.getRemark());
            }
            return complaintRepository.save(complaint);
        }
        return null;
    }

    @Override
    public List<Complaint> getAllComplaints() {
        return complaintRepository.findAll();
    }





}