package com.MHunter.mhunter.repository;

import com.MHunter.mhunter.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
    @Query(value = "SELECT * FROM user WHERE user_id = :userId ", nativeQuery = true)
    User findByUserId(int userId);
    User findByEmail(String email);

    @Query(value = "SELECT event.event_name, (invoice.total_amount*5)/100 , user.first_name " +
            "FROM event " +
            "INNER JOIN invoice ON invoice.eventid = event.eventid " +
            "INNER JOIN organizer ON event.orgid = organizer.org_id " +
            "INNER JOIN user ON organizer.user_id = user.user_id;", nativeQuery = true)
    List<Object[]> adminReport();
}
