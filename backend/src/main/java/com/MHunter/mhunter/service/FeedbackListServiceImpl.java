package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.FeedbackList;
import com.MHunter.mhunter.repository.FeedbackListRepositary;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class FeedbackListServiceImpl implements FeedbackListService{

    @Autowired
    private FeedbackListRepositary feedbackListRepositary;

    @Override
    public List<FeedbackList> findFeedbacksByMMID(int mmid){

        return feedbackListRepositary.findByMMID(mmid);
    }
}
