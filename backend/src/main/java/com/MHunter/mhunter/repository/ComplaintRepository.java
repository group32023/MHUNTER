package com.MHunter.mhunter.repository;

import com.MHunter.mhunter.model.Complaint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ComplaintRepository extends JpaRepository<Complaint,Integer> {
}
