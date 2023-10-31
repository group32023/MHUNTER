package com.MHunter.mhunter.controller;

import ch.qos.logback.core.net.SyslogOutputStream;
import com.MHunter.mhunter.model.*;
import com.MHunter.mhunter.service.*;
import com.MHunter.mhunter.struct.EventOrganizer;
import com.MHunter.mhunter.struct.RequestLogDetails;
import com.MHunter.mhunter.struct.UserMusicMember;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Month;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/requestsLog")
public class BookedListController {
   @Autowired
    private BookedListService bookedListService;

    @Autowired
    private EventService eventService;

    @Autowired
    private UserService userService;

    @Autowired
    private OrganizerService organizerService;



   @PostMapping("/save")
   public String save(@RequestBody BookedList data){
       System.out.println("hi");
       data.setDate(LocalDateTime.now());
       bookedListService.saveBooking(data);
       return "added";
   }

   @GetMapping("/getmmids/{eventid}")
   public List<Integer> getMmidsByEventId(@PathVariable Integer eventid) {
       return bookedListService.getMmidsByEventId(eventid);

//       if (mmids.isEmpty()) {
//           return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//       }
//
//       return new ResponseEntity<>(mmids, HttpStatus.OK);
   }


    @GetMapping("/getAll")
    public List<BookedList> getAllRequestLogs(){

        return bookedListService.getAllRequestLogs();
    }


    @GetMapping("/viewLogs/{mmid}")
    public List<RequestLogDetails> viewRequestsLogDetails(@PathVariable int mmid){
       List<BookedList> bookedLists = bookedListService.viewRequestsLog(mmid);;
       List<RequestLogDetails> events = new ArrayList<>();

       bookedLists.forEach(res -> {
                   Event event = eventService.viewSpecificEvent(res.getEventid());
                   Organizer organizer = organizerService.findSpecificOrganizer(res.getOrgId());
                   User user = userService.findSpecificUser(organizer.getUser().getUserId());
                   RequestLogDetails requestLogDetails = new RequestLogDetails();

                   requestLogDetails.setOrganizerName(user.getFirstName() + " " + user.getLastName());
                   requestLogDetails.setEventName(event.getEvent_name());
                   requestLogDetails.setAgreementId(res.getAgreementId());
                   requestLogDetails.setDate(event.getDate());
                   requestLogDetails.setRequestState(res.getRequestState());

                   events.add(requestLogDetails);
               });


               return events;
   }
}
