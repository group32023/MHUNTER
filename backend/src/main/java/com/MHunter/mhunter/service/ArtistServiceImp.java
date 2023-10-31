package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Artist;
import com.MHunter.mhunter.repository.ArtistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ArtistServiceImp implements ArtistService{

    @Autowired
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
        return artistRepository.findAllArtist();
    }

    @Override
    public Artist findSpecificArtist(int id) {

        Optional<Artist> artist= artistRepository.findById(id);
        return artist.orElse(null);
    }

    @Override
    public Artist updateArtist(Artist artist, int id) {
        return artistRepository.findById(id).map(artist1 -> {
            artist1.setArtist_id(artist.getArtist_id());
            artist1.getMusicMember().setMMID(artist.getMusicMember().getMMID());
            artist1.getUser().setUserId(artist.getUser().getUserId());
            artist1.getMusicMember().setMMID(artist.getMusicMember().getMMID());
            artist1.getUser().setUserId(artist.getUser().getUserId());
            return artistRepository.save(artist1);
        }).orElse(null);
    }

    @Override
    public boolean deleteArtist(int id) {
        artistRepository.deleteById(id);
        return true;
    }
}
