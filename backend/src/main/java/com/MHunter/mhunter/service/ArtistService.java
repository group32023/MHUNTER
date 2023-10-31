package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Artist;
import com.MHunter.mhunter.model.Band;
import com.MHunter.mhunter.model.User;

import java.util.List;

public interface ArtistService {

    public Artist saveArtist(Artist artist);
    public List<Artist> findAllArtist();

    public Artist findSpecificArtist(int id);
    public Artist updateArtist(Artist artist,int id);
    public boolean deleteArtist(int id);
    public Artist findByMMID(int mmid);
}
