package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.*;
import com.MHunter.mhunter.repository.*;
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

    @Autowired
    private StaffMemberRepository staffMemberRepository;

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
                    Artist artist = artistRepository.findByUserUserId(existingUser.getUserId());
                    StaffMember staffMember = staffMemberRepository.findByUserUserId(existingUser.getUserId());
                    String msg = "Login Success";
                    if (band != null) {
                        msg += "#Band";
                    }
                    if (artist != null) {
                        msg += "#Artist";
                    }
                    if(staffMember != null && "Admin".equals(staffMember.getJobRoll())){
                        msg += "#Admin";
                    }
                    if(staffMember != null && "Moderator".equals(staffMember.getJobRoll())) {
                        msg += "#Moderator";
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
