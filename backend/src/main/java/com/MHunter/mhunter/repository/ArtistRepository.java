package com.MHunter.mhunter.repository;

import com.MHunter.mhunter.model.Artist;
import com.MHunter.mhunter.model.Band;
import  com.MHunter.mhunter.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface ArtistRepository extends JpaRepository<Artist,Integer> {
    Artist findByUserUserId(Integer userId);

    @Query (value = "SELECT a.* FROM artist a INNER JOIN user u ON a.user_id = u.user_id ",nativeQuery = true)
    List <Artist> findAllArtist();
    @Transactional
    @Modifying
    @Query(value = "DELETE a FROM artist a WHERE a.mmid IN (SELECT mm.mmid FROM music_member mm WHERE mm.user_id = :user_id)", nativeQuery = true)
    void deleteByUserId(@Param("user_id") int userId);

    /*@Transactional
    @Modifying
    @Query(value = "DELETE FROM Artist a WHERE a.user.userId = :userId")
    void deleteByUserId(@Param("userId") int userId);*/


    @Query(value = "SELECT * FROM artist WHERE mmid = :mmid ",nativeQuery = true)
    Artist findByMmid(@Param("mmid") int mmid);
}
