package com.MHunter.mhunter.repository;

import com.MHunter.mhunter.model.BookedList;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookedListRepository extends JpaRepository<BookedList, Integer> {
}
