package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Feedback;
import com.MHunter.mhunter.repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FeedbackServiceImpl implements FeedbackService{

    @Autowired
    private FeedbackRepository feedbackRepository;

    @Override
    public Feedback findFeedbackByFeedbackID(int feedback_id){

        return  feedbackRepository.findByFeedbackID(feedback_id);
    }


}
