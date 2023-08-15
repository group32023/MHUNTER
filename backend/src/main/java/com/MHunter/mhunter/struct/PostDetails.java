package com.MHunter.mhunter.struct;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PostDetails {
    private int postID;
    private String caption;
    private String description;
    private LocalDate date;
    private String fileName;
    private String fileType;
    private String filePath;
}
