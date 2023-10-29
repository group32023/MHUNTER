package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.BookedList;
import com.MHunter.mhunter.repository.BookedListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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

    @Override
    public List<BookedList> getAllRequestLogs() {
        return bookedListRepository.findAll();
    }

    @Override
    public List<Integer> getMmidsByEventId(int eventid) {
        List<BookedList> bookings = bookedListRepository.findByEventid(eventid);
        List<Integer> mmids = new ArrayList<>();

        for (BookedList booking : bookings) {
            mmids.add(booking.getMmid());
        }

        return mmids;
    }
}
