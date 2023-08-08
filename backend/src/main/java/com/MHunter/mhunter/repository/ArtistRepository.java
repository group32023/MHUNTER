package com.MHunter.mhunter.repository;

import com.MHunter.mhunter.model.Artist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArtistRepository extends JpaRepository<Artist,Integer> {
    Artist findByUserUserId(Integer userId);
}
