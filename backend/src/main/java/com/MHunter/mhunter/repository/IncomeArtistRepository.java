package com.MHunter.mhunter.repository;

import com.MHunter.mhunter.model.IncomeArtist;
import com.MHunter.mhunter.model.IncomeArtistId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IncomeArtistRepository extends JpaRepository<IncomeArtist, IncomeArtistId> {
//    find by using artist id and event id
//    IncomeArtist findByArtistIdAndEventId(IncomeArtistId id);

//    find list of income using artist id
//    @Query("SELECT i FROM income_artist i WHERE i.id.artistId = :artistId")
    List<IncomeArtist> findById_Mmid(int mmid);

}
