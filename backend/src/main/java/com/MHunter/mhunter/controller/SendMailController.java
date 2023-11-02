package com.MHunter.mhunter.controller;

import com.MHunter.mhunter.service.SendMailService;
import com.MHunter.mhunter.struct.MailDetails;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.File;

@RestController
@CrossOrigin
@RequestMapping("/sendMail")
public class SendMailController {
    @Autowired
    private SendMailService sendMailService;

    @PostMapping("/send/{orgId}/{eventId}/{mmid}")
    public String sendMail(@PathVariable int orgId,@PathVariable int eventId, @PathVariable int mmid) throws MessagingException {
        sendMailService.sendMail(orgId,eventId,mmid);
        return "Mail Send Successfully";
    }
}
