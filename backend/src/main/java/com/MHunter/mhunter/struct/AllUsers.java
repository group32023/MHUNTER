package com.MHunter.mhunter.struct;

import com.MHunter.mhunter.model.*;

import java.util.List;


public class AllUsers {
    private List<User> users;
    private List<Organizer> organizers;
    private List<Artist> artists;
    private List<Band> bands;
    private List<MusicMember> musicMembers;

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    public List<Organizer> getOrganizers() {
        return organizers;
    }

    public void setOrganizers(List<Organizer> organizers) {
        this.organizers = organizers;
    }

    public List<Artist> getArtists() {
        return artists;
    }

    public void setArtists(List<Artist> artists) {
        this.artists = artists;
    }

    public List<Band> getBands() {
        return bands;
    }

    public void setBands(List<Band> bands) {
        this.bands = bands;
    }

    public List<MusicMember> getMusicMembers() {
        return musicMembers;
    }

    public void setMusicMembers(List<MusicMember> musicMembers) {
        this.musicMembers = musicMembers;
    }
}
