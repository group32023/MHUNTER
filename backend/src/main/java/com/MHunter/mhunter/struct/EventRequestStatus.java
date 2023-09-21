package com.MHunter.mhunter.struct;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EventRequestStatus {
    private Integer MMID;
    private Integer orgId;
    private Integer confirmationStatus;
    private Integer eventId;
    private String fullName;

}
