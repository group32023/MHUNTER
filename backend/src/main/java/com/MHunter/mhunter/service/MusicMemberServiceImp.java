package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.MusicMember;
import com.MHunter.mhunter.repository.MusicMemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class MusicMemberServiceImp implements MusicMemberService{
    @Autowired
    private MusicMemberRepository musicMemberRepository;
    @Override
    public List<MusicMember> viewMusicMembers() {
        return musicMemberRepository.findAll();
    }
    @Override
    public MusicMember findSpecificMusicMember(int mmid) {
        return musicMemberRepository.findById(mmid).orElse(null);
    }

    @Override
    public MusicMember findSpecificMusicMemberByUserID(int user_id) {
        return musicMemberRepository.findUserByUser_Id(user_id);
    }

    @Override
    public List<Object[]> getCountOfBandAndArtist() {
        return musicMemberRepository.countBandArtist();
    }

}
