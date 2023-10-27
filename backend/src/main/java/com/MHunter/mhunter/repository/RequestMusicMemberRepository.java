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

    List<RequestMusicMember> findByRequestMusicMemberIdEventId(int eventId);

//    List<EventRequestStatus> findByOrgIdAndEventId(Integer orgId, Integer eventId);
//    @Query("SELECT rmm.mmid, rmm.org_id, rmm.confirmation_status, rmm.event_id, mm.user_id, CONCAT(u.first_name, ' ', u.last_name) AS full_name FROM request_music_member AS rmm JOIN music_member AS mm ON rmm.mmid = mm.mmid JOIN user AS u ON mm.user_id = u.user_id WHERE rmm.org_id = 9 AND rmm.event_id = 26")
//    List<Object[]> getCustomResult();

}
