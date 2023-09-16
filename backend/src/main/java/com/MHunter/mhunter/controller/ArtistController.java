package com.MHunter.mhunter.controller;


import com.MHunter.mhunter.model.Artist;
import com.MHunter.mhunter.service.ArtistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/artist")

public class ArtistController {

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
