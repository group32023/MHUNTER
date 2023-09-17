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
    int orgId;
    String type;
    String name;
    String jobRoll;

}
