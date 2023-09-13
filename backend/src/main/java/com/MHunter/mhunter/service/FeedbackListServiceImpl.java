package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.FeedbackList;
import com.MHunter.mhunter.repository.FeedbackListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedbackListServiceImpl implements FeedbackListService{

    @Autowired
    private FeedbackListRepository feedbackListRepository;

    @Override
    public List<FeedbackList> findFeedbacksByMMID(int mmid){

        return feedbackListRepository.findByMMID(mmid);
    }
}
