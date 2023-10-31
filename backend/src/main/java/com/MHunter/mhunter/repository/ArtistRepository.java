package com.MHunter.mhunter.repository;

import com.MHunter.mhunter.model.Artist;
import com.MHunter.mhunter.model.Band;
import  com.MHunter.mhunter.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArtistRepository extends JpaRepository<Artist,Integer> {
    Artist findByUserUserId(Integer userId);

    @Query (value = "SELECT a.* FROM artist a INNER JOIN user u ON a.user_id = u.user_id ",nativeQuery = true)
    List <Artist> findAllArtist();

    @Query(value = "SELECT * FROM artist WHERE mmid = :mmid ",nativeQuery = true)
    Artist findByMmid(@Param("mmid") int mmid);
}
