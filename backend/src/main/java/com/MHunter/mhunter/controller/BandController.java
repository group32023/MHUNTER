package com.MHunter.mhunter.controller;

import com.MHunter.mhunter.model.Band;
import com.MHunter.mhunter.model.MusicMember;
import com.MHunter.mhunter.service.BandService;
import com.MHunter.mhunter.service.MusicMemberService;
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

    @GetMapping("/view/verified")
    public List<UserBand> viewVerifiedArtists() {
        List<Band> bandList = bandService.viewAllBands();
        List<UserBand> verifiedUserBandList = new ArrayList<>();

        bandList.forEach(item -> {
            MusicMember musicMember = musicMemberService.findSpecificMusicMember(item.getMusicMember().getMMID());
            if (musicMember.getType().toLowerCase().equals("band") && item.getUser().getIsVerified()== 1 ) {
                UserBand userBand = new UserBand();
                userBand.setBandName(musicMember.getName());
                userBand.setImgPath(item.getUser().getImagePath());
                userBand.setFirstName(item.getUser().getFirstName());
                userBand.setLastName(item.getUser().getLastName());
                userBand.setType(item.getMusicMember().getType());
                userBand.setId(item.getUser().getUserId());
                userBand.setAddress(item.getUser().getAddress());
                userBand.setEmail(item.getUser().getEmail());
                userBand.setIsVerified(item.getUser().getIsVerified());
                verifiedUserBandList.add(userBand);
            }
        });
        return verifiedUserBandList;
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
