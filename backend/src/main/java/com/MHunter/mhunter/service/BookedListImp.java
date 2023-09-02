package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.BookedList;
import com.MHunter.mhunter.model.RequestMusicMember;
import com.MHunter.mhunter.repository.BookedListRepository;
import com.MHunter.mhunter.repository.InvoiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookedListImp implements BookedListService{

    @Autowired
    private BookedListRepository bookedListRepository;
    @Override
    public BookedList saveBooking(BookedList bookedList) {
        return bookedListRepository.save(bookedList);
    }

    @Override
    public List<BookedList> viewRequestsLog(int mmid) {
        return bookedListRepository.findByRequestsLogList(mmid);
    }
}
