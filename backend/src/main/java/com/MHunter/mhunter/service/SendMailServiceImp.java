package com.MHunter.mhunter.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.io.File;

@Service
public class SendMailServiceImp implements SendMailService {
    @Autowired
    private JavaMailSender javaMailSender;
    @Override
    public void sendMail(String toMail, String subject, String body) throws MessagingException {
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
        helper.setTo(toMail);
        helper.setSubject(subject);
        helper.setText(body);

//        FileSystemResource fileSystemResource = new FileSystemResource(file);

        javaMailSender.send(message);

        System.out.println("Send Mail");
    }
}
