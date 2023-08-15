package com.MHunter.mhunter.repository;

import com.MHunter.mhunter.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    User findByEmail(String email);
    @Query(value = "SELECT * FROM user WHERE user_id = :userId ", nativeQuery = true)
    User findByUserId(int userId);

}
