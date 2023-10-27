package com.MHunter.mhunter.repository;

import com.MHunter.mhunter.model.MusicMember;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MusicMemberRepository extends JpaRepository<MusicMember,Integer> {

    @Query(value = "SELECT * FROM music_member WHERE mmid = :mmid ", nativeQuery = true)
    MusicMember findByMMID(int mmid);

    @Query(value = "SELECT type, COUNT(DISTINCT user_id) AS user_count FROM music_member GROUP BY type", nativeQuery = true)
    List<Object[]> countBandArtist();

    @Query(value = "SELECT * FROM music_member WHERE user_id = :user_id", nativeQuery = true)
    MusicMember findUserByUser_Id(int user_id);
}
