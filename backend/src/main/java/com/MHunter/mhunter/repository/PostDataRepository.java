package com.MHunter.mhunter.repository;

import com.MHunter.mhunter.model.PostData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PostDataRepository extends JpaRepository<PostData,Integer> {
    @Query(value = "SELECT data FROM `post_data` WHERE post_id=:postId",nativeQuery = true)
    String findPostData(int postId);
}
