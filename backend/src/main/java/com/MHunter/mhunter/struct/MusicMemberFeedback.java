package com.MHunter.mhunter.struct;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MusicMemberFeedback {

    private String firstName;
    private String lastName;
    private MultipartFile Image;
    private String description;
    private int rate;
    private Date date;

}
