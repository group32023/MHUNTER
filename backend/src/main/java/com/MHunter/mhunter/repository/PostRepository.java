package com.MHunter.mhunter.repository;

import com.MHunter.mhunter.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post,Integer> {
    @Query(value = "SELECT * FROM post WHERE mmid=:mmid",nativeQuery = true)
    List<Post> findByMMID(int mmid);

    @Query(value = "SELECT post_id as postID FROM `post` WHERE mmid=:mmid GROUP BY date DESC LIMIT 1; ",nativeQuery = true)
    int findLastPostID(int mmid);
}
