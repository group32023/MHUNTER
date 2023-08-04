package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.RequestMusicMember;
import com.MHunter.mhunter.model.RequestMusicMemberId;
import com.MHunter.mhunter.repository.RequestMusicMemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RequestMusicMemberServiceImp implements RequestMusicMemberService{

    @Autowired
    private RequestMusicMemberRepository requestMusicMemberRepository;

    @Override
    public RequestMusicMember saveRequestMusicMember(RequestMusicMember requestMusicMember) {
        return requestMusicMemberRepository.save(requestMusicMember);
    }

    @Override
    public List<RequestMusicMember> viewAll() {
        return requestMusicMemberRepository.findAll();
    }

    @Override
    public RequestMusicMember updateRequestMusicMember(RequestMusicMember requestMusicMember, RequestMusicMemberId id) {
        return requestMusicMemberRepository.findById(id).map(requestMusicMember1 -> {
            requestMusicMember1.setRequestMusicMemberId(requestMusicMember.getRequestMusicMemberId());
            requestMusicMember1.setOrgId(requestMusicMember.getOrgId());
            requestMusicMember1.setConformationStatus(requestMusicMember.getConformationStatus());
            requestMusicMember1.setRequestDate(requestMusicMember.getRequestDate());
            requestMusicMember1.setConfirmationDate(requestMusicMember.getConfirmationDate());
            return requestMusicMemberRepository.save(requestMusicMember1);
        }).orElse(null);
    }

    @Override
    public RequestMusicMember findSpecific(RequestMusicMemberId requestMusicMemberId) {
        Optional<RequestMusicMember> data = requestMusicMemberRepository.findById(requestMusicMemberId);
        return data.orElse(null);
    }

    @Override
    public boolean deleteRequestMusicMember(RequestMusicMemberId requestMusicMemberId) {
         requestMusicMemberRepository.deleteById(requestMusicMemberId);
         return true;
    }

    @Override
    public int countPendingRequest(int mmid) {
        return requestMusicMemberRepository.countByMMID(mmid);
    }

    @Override
    public int countAllEvents(int mmid) {
        return requestMusicMemberRepository.findByMMID(mmid);
    }
}
