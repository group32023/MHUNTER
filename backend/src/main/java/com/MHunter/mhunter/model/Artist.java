package com.MHunter.mhunter.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Artist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int artist_id;
    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "mmid")
    private MusicMember musicMember;
    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    public Artist() {
    }

    public int getArtist_id() {
        return artist_id;
    }

    public void setArtist_id(int artist_id) {
        this.artist_id = artist_id;
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
