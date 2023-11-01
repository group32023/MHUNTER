package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Complaint;

import java.util.List;

public interface ComplaintService {

    public Complaint saveComplaint(Complaint complaint);

    public List<Complaint> getComplaintsByOrgId(Integer orgId);
    List<Complaint> getAllComplaints(); // Add this method


    List<Complaint> getComplaintsByComplaintID(int complaintID);

    Complaint updateComplaint(int complaintID, UpdateComplaintRequest request);
//    public Complaint updateComplaint(Complaint complaint);


}
