package com.MHunter.mhunter.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int UserID;
    private String fname;
    private String lname;
    private String address;
    private String email;
    private String password;
    private String ProfileImage;
    private int PhoneNo;
    private String MemberType;
    private String RegData;
    private int IsVerified;
    private int RemovedStaffID;
    private String RemovedDate;
    private int SuspendedStaffID;
    private String SuspendedDate;
    private String Remark;
//    private int is_verified;
//    private String member_type;
//    private int phone_no;
//    private String profile_image;
//    private String reg_data;
//    private String removed_date;
//    private int removed_staffid;
//    private String suspended_date;
//    private int suspended_staffid;

}
