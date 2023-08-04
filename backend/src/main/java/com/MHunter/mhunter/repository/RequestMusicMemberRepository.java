package com.MHunter.mhunter.repository;

import com.MHunter.mhunter.model.IncomeArtist;
import com.MHunter.mhunter.model.IncomeArtistId;
import com.MHunter.mhunter.model.RequestMusicMember;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RequestMusicMemberRepository extends JpaRepository<RequestMusicMember, IncomeArtistId> {
    List<RequestMusicMember> findById_ArtistId(int artistId);

    RequestMusicMember findById_EventId(int eventId);
}
