package com.MHunter.mhunter.repository;

import com.MHunter.mhunter.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

}
