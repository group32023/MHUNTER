package com.MHunter.mhunter.controller;

import com.MHunter.mhunter.model.Feedback;
import com.MHunter.mhunter.model.FeedbackList;
import com.MHunter.mhunter.model.Organizer;
import com.MHunter.mhunter.model.User;
import com.MHunter.mhunter.service.FeedbackListService;
import com.MHunter.mhunter.service.FeedbackService;
import com.MHunter.mhunter.service.OrganizerService;
import com.MHunter.mhunter.service.UserService;
import com.MHunter.mhunter.struct.MusicMemberFeedback;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@CrossOrigin (origins = "*")
@RestController
@RequestMapping("/feedback")

public class FeedbackController {



    @Autowired
    private  FeedbackService  feedbackService;

    @Autowired
    private FeedbackListService feedbackListService;

    @Autowired
    private OrganizerService organizerService;

    @Autowired
    private UserService userService;

    @GetMapping ("/viewMusicMemberFeedback/{mmid}")

    public List<MusicMemberFeedback> getFeedbacksOfMember(@PathVariable int mmid){

        List<FeedbackList> feedbackLists = feedbackListService.findFeedbacksByMMID(mmid);
        List<MusicMemberFeedback> musicMemberFeedbackList = new ArrayList<>();

        feedbackLists.forEach(res ->{

              Feedback feedback = feedbackService.findFeedbackByFeedbackID(res.getFeedbackId()) ;
              Organizer organizer = organizerService.findSpecificOrganizer(res.getOrgId());
              System.out.println("OrgId: " + res.getOrgId());
              System.out.println("Organizer object: " + organizer);
              User user = userService.findSpecificUser(organizer.getUser().getUserId());


                MusicMemberFeedback musicMemberFeedback = new MusicMemberFeedback();

                musicMemberFeedback.setOrganizerName(user.getFirstName()+""+user.getLastName());
                musicMemberFeedback.setImage(user.getImage());
                musicMemberFeedback.setDescription(feedback.getDescription());
                musicMemberFeedback.setRate(feedback.getRate());
                musicMemberFeedback.setDate(feedback.getDate());

                musicMemberFeedbackList.add(musicMemberFeedback);

             }
        );

        return musicMemberFeedbackList;
    }
}



