package com.MHunter.mhunter.controller;

import com.MHunter.mhunter.model.Artist;
import com.MHunter.mhunter.model.Band;
import com.MHunter.mhunter.model.MusicMember;
import com.MHunter.mhunter.service.ArtistService;
import com.MHunter.mhunter.service.MusicMemberService;
import com.MHunter.mhunter.struct.UserArtist;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/artist")
public class ArtistController {
    @Autowired
    private ArtistService artistService;
    @Autowired
    private MusicMemberService musicMemberService;






    @GetMapping("/view")
    public List<UserArtist> viewAll(){
        List<Artist> artistList = artistService.findAllArtist();
        List<UserArtist> userArtistList = new ArrayList<>();
        artistList.forEach(item ->{
            MusicMember musicMember = musicMemberService.findSpecificMusicMember(item.getMusicMember().getMMID());
            if(musicMember.getType().toLowerCase().equals("artist")){
                UserArtist userArtist = new UserArtist();
                userArtist.setArtistName(musicMember.getName());
                userArtist.setImgPath(item.getUser().getImagePath());

                userArtistList.add(userArtist);
            }
        });
        return userArtistList;
    }

    @GetMapping("/getAll")
    public List<Artist> getAllArtists(){

        return artistService.findAllArtist();
    }

    @GetMapping("/viewSpecificArtist/{mmid}")
    public Artist viewSpecificArtist( @PathVariable int mmid){
        Artist artist = artistService.findByMMID(mmid);
        int artistId = artist.getArtist_id();
        return artistService.findSpecificArtist(artistId);
    }


    @GetMapping("/view/verified")
    public List<UserArtist> viewVerifiedArtists() {
        List<Artist> artistList = artistService.findAllArtist();
        List<UserArtist> verifiedUserArtistList = new ArrayList<>();

        artistList.forEach(item -> {
            MusicMember musicMember = musicMemberService.findSpecificMusicMember(item.getMusicMember().getMMID());
            if (musicMember.getType().toLowerCase().equals("artist") && item.getUser().getIsVerified()== 1 ) {
                UserArtist userArtist = new UserArtist();
                userArtist.setArtistName(musicMember.getName());
                userArtist.setImgPath(item.getUser().getImagePath());
                userArtist.setFirstName(item.getUser().getFirstName());
                userArtist.setLastName(item.getUser().getLastName());
                userArtist.setType(item.getMusicMember().getType());
                userArtist.setId(item.getUser().getUserId());
                userArtist.setAddress(item.getUser().getAddress());
                userArtist.setEmail(item.getUser().getEmail());
                userArtist.setIsVerified(item.getUser().getIsVerified());
                verifiedUserArtistList.add(userArtist);
            }
        });
        return verifiedUserArtistList;
    }

}
