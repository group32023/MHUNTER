package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.MusicMember;

import java.util.List;

public interface MusicMemberService {
    public List<MusicMember> viewMusicMembers();

    public MusicMember findSpecificMusicMember(int mmid);
}