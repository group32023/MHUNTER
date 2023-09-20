package com.MHunter.mhunter.struct;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AllUsers {
    String firstName;
    String lastName;
    String imagePath;
    int Id;
    String type;
    String name;
    String jobRoll;
    String status;

}
