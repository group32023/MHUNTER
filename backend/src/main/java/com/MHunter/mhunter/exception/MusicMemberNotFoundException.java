package com.MHunter.mhunter.exception;

public class MusicMemberNotFoundException extends RuntimeException{
    public MusicMemberNotFoundException(int userId){super("Could not found the Music user with id "+ userId);}
}
