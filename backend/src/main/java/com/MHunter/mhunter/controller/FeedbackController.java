package com.MHunter.mhunter.controller;

import com.MHunter.mhunter.model.Feedback;
import com.MHunter.mhunter.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin (origins = "*")
@RestController
@RequestMapping("/feedback")

public class FeedbackController {

    @Autowired
    private  FeedbackService  feedbackService;

    @PostMapping("/view/{mmid}")
    public List<Feedback> getFeedbacksOfMember(@PathVariable int mmid){
        return  feedbackService.getFeedbacksOfMember(mmid);
    }
}
