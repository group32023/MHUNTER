package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Event;
import com.MHunter.mhunter.model.IncomeArtist;
import com.MHunter.mhunter.model.IncomeArtistId;
import com.MHunter.mhunter.model.RequestMusicMember;

import java.util.List;

public interface RequestMusicMemberService {

    public RequestMusicMember saveRequest(RequestMusicMember request);
    public List<RequestMusicMember> getAllRequest();

    public List<RequestMusicMember> viewSpecificPendingEventRequest(int artistId);
    public RequestMusicMember updateRequest(int eventId);

}
