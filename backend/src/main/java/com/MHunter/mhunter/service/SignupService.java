package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Artist;
import com.MHunter.mhunter.model.Band;
import com.MHunter.mhunter.model.MusicMember;
import com.MHunter.mhunter.model.User;
import com.MHunter.mhunter.repository.ArtistRepository;
import com.MHunter.mhunter.repository.BandRepository;
import com.MHunter.mhunter.repository.MusicMemberRepository;
import com.MHunter.mhunter.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SignupService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MusicMemberRepository musicMemberRepository;

    @Autowired
    private BandRepository bandRepository;

    @Autowired
    private ArtistRepository artistRepository;

    @Transactional
    public void signUpAndCreateMember(User user, String Name, String Type) {
        User savedUser = userRepository.save(user);

        MusicMember musicMember = new MusicMember();
        musicMember.setUser(savedUser);
        musicMember.setName(Name);
        musicMember.setType(Type);
        musicMemberRepository.save(musicMember);

        if ("Band".equals(Type)){
            Band band = new Band();
            band.setUser(savedUser);
            band.setMusicMember(musicMember);
            bandRepository.save(band);
        }
        else if("Artist".equals(Type)){
            Artist artist = new Artist();
            artist.setUser(savedUser);
            artist.setMusicMember(musicMember);
            artistRepository.save(artist);
        }

    }
}
