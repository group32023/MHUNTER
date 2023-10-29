package com.MHunter.mhunter.controller;

import com.MHunter.mhunter.model.Artist;
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
//    @Autowired
//    private ArtistService artistService;
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
                System.out.println(item.getUser().getImagePath());
                userArtistList.add(userArtist);
            }
        });
        return userArtistList;
    }
    @Autowired
    private ArtistService artistService;

    @GetMapping("/getAll")
    public List<Artist> getAllArtists(){

        return artistService.findAllArtist();
    }

    @GetMapping("/viewSpecificArtist/{mmid}")
    public Artist viewSpecificArtist(@PathVariable int mmid){

        return artistService.findSpecificArtist(mmid);
    }


}
