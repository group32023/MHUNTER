package com.MHunter.mhunter.struct;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserArtist {
    private String artistName;
    private int rate;
    private String imgPath;
    private String firstName;
    private String lastName;
    private String type;
    private int Id;
    private String address;
    private String email;
    private int isVerified;


}
