package com.MHunter.mhunter.repository;

import com.MHunter.mhunter.model.FeedbackList;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface FeedbackListRepositary {

    @Query(value = "SELECT * FROM feedbacklist WHERE mmid = :mmid ",nativeQuery = true)
    List<FeedbackList> findByMMID(@Param("mmid") int mmid);
}
