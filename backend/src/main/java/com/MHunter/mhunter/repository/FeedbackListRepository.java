package com.MHunter.mhunter.repository;

import com.MHunter.mhunter.model.Feedback;
import com.MHunter.mhunter.model.FeedbackList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FeedbackListRepository extends JpaRepository<FeedbackList,Integer> {

    @Query(value = "SELECT * FROM feedbacklist WHERE mmid = :mmid ",nativeQuery = true)
    List<FeedbackList> findByMMID(@Param("mmid") int mmid);
}
