package com.MHunter.mhunter.repository;

import com.MHunter.mhunter.model.Artist;
import com.MHunter.mhunter.model.Band;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BandRepository extends JpaRepository<Band,Integer> {
    Band findByUserUserId(Integer userId);

    @Query(value = "SELECT b.* FROM band b INNER JOIN user u ON b.user_id = u.user_id ",nativeQuery = true)
    List<Band> findAllBand();

    @Query(value = "SELECT b.* FROM band b INNER JOIN user u ON b.user_id = u.user_id WHERE is_verified = 1",nativeQuery = true)
    List<Band> findAllBandVerified();

    @Query(value = "SELECT * FROM band WHERE mmid = :mmid ",nativeQuery = true)
    Band findByMmid(@Param("mmid") int mmid);

//    Band findByBandid(int id);
}

