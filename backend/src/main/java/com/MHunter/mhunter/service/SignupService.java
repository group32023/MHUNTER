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
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @Transactional
    public ResponseEntity<String> loginUser(User user) {
        try {
            User existingUser = userRepository.findByEmail(user.getEmail());

            if (existingUser != null) {
                String password = user.getPassword();
                String checkPassword = existingUser.getPassword();

                if (password.equals(checkPassword)) {
                    Band band = bandRepository.findByUserUserId(existingUser.getUserId());
                    String msg = "Login Success";
                    if (band != null) {
                        msg += "#Band";
                    }
                    return ResponseEntity.ok(msg);
                } else {
                    return ResponseEntity.badRequest().body("Incorrect password!");
                }
            } else {
                return ResponseEntity.badRequest().body("User not found!");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred");
        }
    }


}
