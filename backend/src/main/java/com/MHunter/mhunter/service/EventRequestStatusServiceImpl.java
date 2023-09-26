package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.RequestMusicMember;
import com.MHunter.mhunter.repository.EventRequestStatusRepository;
import com.MHunter.mhunter.repository.RequestMusicMemberRepository;
import com.MHunter.mhunter.struct.EventRequestStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventRequestStatusServiceImpl implements EventRequestStatusService {

    @Autowired
    private EventRequestStatusRepository eventRequestStatusRepository;

    @Autowired
    private RequestMusicMemberRepository requestMusicMemberRepository;


    @Override
    public List<EventRequestStatus> getEventRequestStatus() {
        // Use the repository interfaces to interact with the database
        List<RequestMusicMember> requestMusicMembers = requestMusicMemberRepository.fin(9, 26);

        // Map the result to EventRequestStatus DTO
        List<EventRequestStatus> eventRequestStatusList = new ArrayList<>();
        for (RequestMusicMember rmm : requestMusicMembers) {
            MusicMember musicMember = musicMemberRepository.findById(rmm.getMmid()).orElse(null);
            User user = userRepository.findById(musicMember.getUserId()).orElse(null);

            if (musicMember != null && user != null) {
                EventRequestStatus eventRequestStatus = new EventRequestStatus();
                eventRequestStatus.setMmid(rmm.getMmid());
                eventRequestStatus.setOrgId(rmm.getOrgId());
                eventRequestStatus.setConfirmationStatus(rmm.getConfirmationStatus());
                eventRequestStatus.setEventId(rmm.getEventId());
                eventRequestStatus.setUserId(user.getUserId());
                eventRequestStatus.setFullName(user.getFirstName() + " " + user.getLastName());
                eventRequestStatusList.add(eventRequestStatus);
            }
    }
}
