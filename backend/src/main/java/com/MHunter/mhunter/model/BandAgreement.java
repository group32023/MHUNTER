package com.MHunter.mhunter.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class BandAgreement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int agreementId;
    private int mmid;
    private int eventId;

    private String rule1;
    private String rule2;
    private String rule3;
    private String rule4;
    private String additionalRules;
    //private String sign;
    private String url;
}
