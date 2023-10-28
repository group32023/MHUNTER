package com.MHunter.mhunter.struct;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserMusicMember {
    private String userName;
    private String address;
    private String email;
}
