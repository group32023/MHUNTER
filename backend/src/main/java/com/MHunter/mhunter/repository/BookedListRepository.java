package com.MHunter.mhunter.repository;

import com.MHunter.mhunter.model.BookedList;
import com.MHunter.mhunter.model.RequestMusicMember;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BookedListRepository extends JpaRepository<BookedList, Integer> {

    @Query(value = "SELECT * FROM booked_list WHERE mmid = :mmid", nativeQuery = true)
    List<BookedList> findByRequestsLogList( @Param("mmid") int mmid);


    BookedList findByMmidAndEventid(int mmid, int eventid);
    @Query(value = "SELECT * FROM booked_list WHERE eventid = :eventid", nativeQuery = true)
    List<BookedList> findByEventid(@Param("eventid") int eventid);

    List<BookedList> findByOrgId(int orgId);
}
