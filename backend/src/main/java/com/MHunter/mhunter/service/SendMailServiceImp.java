package com.MHunter.mhunter.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class SendMailServiceImp implements SendMailService {
    @Autowired
    private JavaMailSender javaMailSender;
    @Override
    public void sendMail(String toMail, String subject, String body) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("kasungayashan789@gmail.com");
        message.setTo(toMail);
        message.setSubject(subject);
        message.setText(body);

        javaMailSender.send(message);

        System.out.println("Send Mail");
    }
}
