package com.MHunter.mhunter.repository;

import com.MHunter.mhunter.model.Event;
import com.MHunter.mhunter.model.MusicMember;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface MusicMemberRepository extends JpaRepository<MusicMember,Integer> {


    @Query(value = "SELECT * FROM music_member WHERE mmid = :mmid ", nativeQuery = true)
    MusicMember findByMMID(int mmid);
}
