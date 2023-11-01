package com.MHunter.mhunter.struct;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RequestLogDetails {
    private String organizerName;
    private String eventName;
    private int agreementId;
    private LocalDate date;
    private String requestState;
    private String image;

}
