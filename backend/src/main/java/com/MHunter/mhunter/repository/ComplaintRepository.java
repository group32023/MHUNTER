package com.MHunter.mhunter.repository;

import com.MHunter.mhunter.model.Complaint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Repository
@CrossOrigin

public interface ComplaintRepository extends JpaRepository<Complaint,Integer> {
    List<Complaint> findByOrgId(Integer orgId);
    List<Complaint> findByComplaintID(int complaintID);



}
