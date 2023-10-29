package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.BookedList;
import com.MHunter.mhunter.model.RequestMusicMember;

import java.util.List;

public interface BookedListService {


    public BookedList saveBooking(BookedList bookedList);
    public List<BookedList> viewRequestsLog(int mmid);

}
