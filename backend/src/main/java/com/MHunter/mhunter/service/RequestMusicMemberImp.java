package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.RequestMusicMember;
import com.MHunter.mhunter.repository.RequestMusicMemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class RequestMusicMemberImp implements RequestMusicMemberService{

    @Autowired
    private RequestMusicMemberRepository requestMusicMemberRepository;


    @Override
    public RequestMusicMember saveRequest(RequestMusicMember request) {
        return requestMusicMemberRepository.save(request);
    }

    @Override
    public List<RequestMusicMember> getAllRequest() {
        return requestMusicMemberRepository.findAll();
    }

//    @Override
//    public RequestMusicMember updateRequest(RequestMusicMember requestMusicMember, int artistId, int eventId) {
//        return null;
//    }

    @Override
    public List<RequestMusicMember> viewSpecificPendingEventRequest(int artistId) {
        return requestMusicMemberRepository.findById_ArtistId(artistId);
    }

    @Override
    public RequestMusicMember updateRequest(int eventId) {
        RequestMusicMember request = requestMusicMemberRepository.findById_EventId(eventId);
        if (request == null) {
            throw new NoSuchElementException("Request not found");
        }

        byte status = 1;
        LocalDateTime currentDate = LocalDateTime.now();

        request.setConfirmationStatus(status);
        request.setConfirmedDate(currentDate);


        return requestMusicMemberRepository.save(request);
    }
}
