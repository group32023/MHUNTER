package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.FeedbackList;
import org.springframework.stereotype.Service;

import java.util.List;


public interface FeedbackListService {

    public List<FeedbackList> findFeedbacksByMMID(int mmid);
}
