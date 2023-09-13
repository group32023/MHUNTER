package com.MHunter.mhunter.repository;

import com.MHunter.mhunter.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface FeedbackRepositary extends JpaRepository<FeedbackRepositary,Integer> {

    @Query(value = "SELECT * FROM feedback WHERE feedback_id = :feedback_id GROUP BY date ASC",nativeQuery = true)
    Feedback findByFeedbackID(@Param("feedback_id") int feedback_id);
}
