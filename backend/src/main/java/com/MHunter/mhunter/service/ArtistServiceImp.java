package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Artist;
import com.MHunter.mhunter.repository.ArtistRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArtistServiceImp implements ArtistService{
    private ArtistRepository artistRepository;
    public ArtistServiceImp() {
        super();
    }

    @Override
    public Artist saveArtist(Artist artist) {
        return artistRepository.save(artist);
    }

    @Override
    public List<Artist> findAllArtist() {
        return artistRepository.findAll();
    }

    @Override
    public Artist findSpecificArtist(int id) {
        return null;
    }

    @Override
    public Artist updateArtist(Artist artist, int id) {
        return null;
    }

    @Override
    public boolean deleteArtist(int id) {
        return false;
    }
}
