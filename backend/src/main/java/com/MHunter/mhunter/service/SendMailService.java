package com.MHunter.mhunter.service;

import jakarta.mail.MessagingException;

public interface SendMailService {
    public void sendMail(int orgId,int eventId,int mmid) throws MessagingException;
}
