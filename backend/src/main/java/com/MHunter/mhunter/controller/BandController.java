package com.MHunter.mhunter.controller;

import com.MHunter.mhunter.model.Artist;
import com.MHunter.mhunter.model.Band;
import com.MHunter.mhunter.model.MusicMember;
import com.MHunter.mhunter.service.BandService;
import com.MHunter.mhunter.service.MusicMemberService;
import com.MHunter.mhunter.struct.UserArtist;
import com.MHunter.mhunter.struct.UserBand;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/band")
public class BandController {
    @Autowired
    private BandService bandService;
    @Autowired
    private MusicMemberService musicMemberService;

    @GetMapping("/view")
    public List<UserBand> viewAll(){
        List<Band> bandList = bandService.viewAllBands();
        List<UserBand> userBandList = new ArrayList<>();
        bandList.forEach(item ->{
            MusicMember musicMember = musicMemberService.findSpecificMusicMember(item.getMusicMember().getMMID());
            if(musicMember.getType().toLowerCase().equals("band")){
                UserBand userBand = new UserBand();
                userBand.setBandName(musicMember.getName());
                userBand.setImgPath(item.getUser().getImagePath());
                userBandList.add(userBand);
            }
        });
        return userBandList;
    }

    @GetMapping("/getAll")
    public List<Band> getAllBands(){

        return bandService.getAllBands();
    }

    @GetMapping("/viewSpecificBand/{mmid}")
    public Band viewSpecificBand( @PathVariable int mmid){
Band band = bandService.findByMMID(mmid);
int bandId = band.getBandID();
        return bandService.findSpecificBand(bandId);
    }
}
