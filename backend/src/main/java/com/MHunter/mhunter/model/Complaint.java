package com.MHunter.mhunter.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
@Data
@Entity
public class Complaint {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int complaintID;
    private String title;
    private String description;
    private String status;
    private String remark;
    @Temporal(TemporalType.DATE)
    private Date date;
    private Integer userId;
    private Integer eventId;

    public Complaint() {
    }


}
