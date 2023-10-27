package com.MHunter.mhunter.service;

import jakarta.mail.MessagingException;

public interface SendMailService {
    public void sendMail(String toMail, String subject,String body) throws MessagingException;
}
