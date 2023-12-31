package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.RequestMusicMember;
import com.MHunter.mhunter.model.RequestMusicMemberId;
import com.MHunter.mhunter.struct.EventRequestStatus;

import java.util.List;

public interface RequestMusicMemberService {
    public RequestMusicMember saveRequestMusicMember(RequestMusicMember requestMusicMember);

    public List<RequestMusicMember> viewAll();

    public RequestMusicMember updateRequestMusicMember(RequestMusicMemberId id);
    public RequestMusicMember updateReasonRequestMusicMember(RequestMusicMemberId id,String reason);


    public boolean deleteRequestMusicMember(RequestMusicMemberId requestMusicMemberId);

    public RequestMusicMember findSpecific(RequestMusicMemberId requestMusicMemberId);

    public int countPendingRequest(int mmid);
    public List<RequestMusicMember> pendingRequest(int mmid);

    public List<RequestMusicMember> findEventsByMMID(int mmid);

    public List<RequestMusicMember> findConformationEventsByMMID(int mmid);

    public List<RequestMusicMember> findConformationEventsByMMIDForOrg(int mmid, int orgId);

//    public List<RequestMusicMember> getRowsByEventId(int eventId);

    public List<RequestMusicMember> getRowsByEventId(int eventId);



}
