package com.MHunter.mhunter.struct;

import lombok.Data;

@Data
public class MailDetails {
    private String toMail;
    private String subject;
    private String body;
}
