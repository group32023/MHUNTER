package com.MHunter.mhunter.repository;

import com.MHunter.mhunter.model.StaffMember;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StaffMemberRepository extends JpaRepository<StaffMember, Integer> {
    StaffMember findByUserUserId(Integer userId);
}
