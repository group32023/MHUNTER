package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Feedback;
import org.springframework.stereotype.Service;

import java.util.List;


public interface FeedbackService {

  public Feedback findFeedbackByFeedbackID(int feedback_id);
}
