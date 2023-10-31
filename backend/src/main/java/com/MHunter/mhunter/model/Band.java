package com.MHunter.mhunter.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Band {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int BandID;
    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "mmid")
    private MusicMember musicMember;
    @OneToOne(fetch = FetchType.EAGER)
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

