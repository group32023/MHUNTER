package com.MHunter.mhunter.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor

@Table(name = "feedback")

public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int feedbackId;
    private String description;
    private int rate;
    private Date date;
}
