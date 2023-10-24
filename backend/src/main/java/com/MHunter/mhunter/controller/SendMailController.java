package com.MHunter.mhunter.controller;

import com.MHunter.mhunter.service.SendMailService;
import com.MHunter.mhunter.struct.MailDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/sendMail")
public class SendMailController {
    @Autowired
    private SendMailService sendMailService;

    @PostMapping("/send")
    public String sendMail(@RequestBody MailDetails mailDetails){
        sendMailService.sendMail(mailDetails.getToMail(),mailDetails.getSubject(),mailDetails.getBody());
        return "Mail Send Successfully";
    }
}
