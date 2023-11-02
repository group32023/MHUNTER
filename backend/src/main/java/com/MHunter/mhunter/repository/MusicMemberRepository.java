package com.MHunter.mhunter.repository;

import com.MHunter.mhunter.model.MusicMember;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface MusicMemberRepository extends JpaRepository<MusicMember,Integer> {

    @Query(value = "SELECT * FROM music_member WHERE mmid = :mmid ", nativeQuery = true)
    MusicMember findByMMID(int mmid);

    @Query(value = "SELECT mm.type, COUNT(DISTINCT mm.user_id) AS user_count FROM music_member mm JOIN user u ON mm.user_id = u.user_id WHERE u.is_verified = 1 GROUP BY mm.type", nativeQuery = true)
    List<Object[]> countBandArtist();
    @Transactional
    @Modifying
    @Query(value = "DELETE FROM music_member WHERE userId = :user_id", nativeQuery = true)
    void deleteByUserId(@Param("user_id") int userId);

    @Query(value = "SELECT * FROM music_member WHERE user_id = :user_id", nativeQuery = true)
    MusicMember findUserByUser_Id(int user_id);

    @Query(value = "SELECT mm.name FROM music_member mm JOIN request_music_member rmm ON mm.mmid = rmm.mmid WHERE mm.type = 'Artist' AND rmm.confirmation_status = '1' GROUP BY mm.name ORDER BY COUNT(rmm.event_id) DESC LIMIT 10" , nativeQuery = true)
    List<Object[]> findTop10Artists();

    @Query(value = "SELECT mm.name FROM music_member mm JOIN request_music_member rmm ON mm.mmid = rmm.mmid WHERE mm.type = 'Band' AND rmm.confirmation_status = '1' GROUP BY mm.name ORDER BY COUNT(rmm.event_id) DESC LIMIT 10" , nativeQuery = true)
    List<Object[]> findTop10Bands();


}
