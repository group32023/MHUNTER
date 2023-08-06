package com.MHunter.mhunter.model;

import jakarta.persistence.*;

@Entity
public class Band {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int BandID;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "mmid")
    private MusicMember musicMember;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    public Band() {
    }

    public int getBandID() {
        return BandID;
    }

    public void setBandID(int bandID) {
        BandID = bandID;
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

