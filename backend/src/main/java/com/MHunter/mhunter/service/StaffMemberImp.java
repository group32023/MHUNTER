package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.StaffMember;
import com.MHunter.mhunter.repository.StaffMemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StaffMemberImp implements StaffMemberService{
    @Autowired
    private StaffMemberRepository staffMemberRepository;
    @Override
    public List<StaffMember> findAllStaffMembers() {
        return staffMemberRepository.findAll();
    }
}
