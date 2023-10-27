package com.MHunter.mhunter.repository;

import com.MHunter.mhunter.model.RequestMusicMember;
import com.MHunter.mhunter.model.RequestMusicMemberId;
import com.MHunter.mhunter.struct.EventRequestStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RequestMusicMemberRepository extends JpaRepository<RequestMusicMember, RequestMusicMemberId> {


    @Query(value = "SELECT COUNT(*) FROM request_music_member WHERE mmid = :mmid AND confirmation_status = 0", nativeQuery = true)
    int countByMMID(@Param("mmid") int mmid);


    @Query(value = "SELECT * FROM request_music_member WHERE mmid = :mmid AND confirmation_status = 0", nativeQuery = true)
    List<RequestMusicMember> viewPendingRequest(@Param("mmid") int mmid);

    @Query(value = "SELECT * FROM request_music_member WHERE mmid = :mmid GROUP BY request_date ASC",nativeQuery = true)
    List<RequestMusicMember> findByMMID(@Param("mmid") int mmid);

    @Query(value = "SELECT * FROM request_music_member WHERE mmid = :mmid AND confirmation_status = 1", nativeQuery = true)
    List<RequestMusicMember> findByMMIDList(@Param("mmid") int mmid);

    @Query(value = "SELECT * FROM request_music_member WHERE mmid = :mmid AND org_id= :orgId AND confirmation_status = 1", nativeQuery = true)
    List<RequestMusicMember> findByMMIDListForAOrganizer(@Param("mmid") int mmid,@Param("orgId") int orgId);

    List<EventRequestStatus> findByOrgIdAndEventId(Integer orgId, Integer eventId);
    @Query("SELECT rmm.mmid, rmm.orgId, rmm.confirmationStatus, rmm.eventId, mm.userId, CONCAT(u.firstName, ' ', u.lastName) AS fullName FROM RequestMusicMember AS rmm JOIN MusicMember AS mm ON rmm.mmid = mm.mmid JOIN User AS u ON mm.userId = u.userId WHERE rmm.orgId = :orgId AND rmm.eventId = :eventId")
    List<EventRequestStatus> customQuery(@Param("orgId") Long orgId, @Param("eventId") Long eventId);

}
