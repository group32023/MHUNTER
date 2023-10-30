package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.BookedList;

import java.util.List;

public interface BookedListService {


    public BookedList saveBooking(BookedList bookedList);
    public List<BookedList> viewRequestsLog(int mmid);
    public List<BookedList> getAllRequestLogs();

    public BookedList getAllByMmidAndEventidRequestLogs(int mmid, int eventid);

    public List<BookedList> getAllByOrgIdRequestLogs(int OrgId);

}
