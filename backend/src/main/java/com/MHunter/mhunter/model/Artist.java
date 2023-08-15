package com.MHunter.mhunter.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Artist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int artist_id;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "mmid")
    private MusicMember musicMember;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    public Artist() {
    }

    public int getArtistId() {
        return artistId;
    }

    public void setArtistId(int artistId) {
        this.artistId = artistId;
    }

    public MusicMember getMusicMember() {
        return musicMember;
    }

    public void setMusicMember(MusicMember musicMember) {
        this.musicMember = musicMember;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
