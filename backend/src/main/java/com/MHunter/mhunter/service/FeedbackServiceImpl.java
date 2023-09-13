package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Feedback;
import com.MHunter.mhunter.repository.FeedbackRepositary;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class FeedbackServiceImpl implements FeedbackService{

    @Autowired
    private FeedbackRepositary feedbackRepositary;

    @Override
    public Feedback findFeedbackByFeedbackID(int feedback_id){

        return  feedbackRepositary.findByFeedbackID(feedback_id);
    }


}
