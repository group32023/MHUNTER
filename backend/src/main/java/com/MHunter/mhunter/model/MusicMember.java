package com.MHunter.mhunter.model;

import jakarta.persistence.*;

@Entity
public class MusicMember {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int MMID;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;
    private String Name;
    private String Type;

    public MusicMember() {
    }

    public void setUser(User user) {
        this.user = user;
    }

    public int getMMID() {
        return MMID;
    }

    public void setMMID(int MMID) {
        this.MMID = MMID;
    }

    public User getUser() {
        return user;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getType() {
        return Type;
    }

    public void setType(String type) {
        Type = type;
    }

}


