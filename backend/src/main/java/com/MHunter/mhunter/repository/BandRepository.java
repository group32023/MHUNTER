package com.MHunter.mhunter.repository;

import com.MHunter.mhunter.model.Artist;
import com.MHunter.mhunter.model.Band;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BandRepository extends JpaRepository<Band,Integer> {
    Band findByUserUserId(Integer userId);

    @Query(value = "SELECT b.* FROM band b INNER JOIN user u ON b.user_id = u.user_id ",nativeQuery = true)
    List<Band> findAllBand();
}

