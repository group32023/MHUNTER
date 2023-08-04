package com.MHunter.mhunter.repository;

import com.MHunter.mhunter.model.RequestMusicMember;
import com.MHunter.mhunter.model.RequestMusicMemberId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface RequestMusicMemberRepository extends JpaRepository<RequestMusicMember, RequestMusicMemberId> {
    @Query(value = "SELECT COUNT(*) FROM request_music_member WHERE mmid = :mmid AND conformation_status = 0", nativeQuery = true)
    int countByMMID(@Param("mmid") int mmid);

    @Query(value = "SELECT * FROM request_music_member WHERE mmid = :mmid",nativeQuery = true)
    int findByMMID(@Param("mmid") int mmid);


}
