package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Complaint;

import java.util.List;

public interface ComplaintService {

    public Complaint saveComplaint(Complaint complaint);

    public List<Complaint> getComplaintsByOrgId(Integer orgId);
//    List<Complaint> getAllComplaints();

}
