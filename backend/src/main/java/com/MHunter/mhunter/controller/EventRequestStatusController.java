package com.MHunter.mhunter.controller;

import com.MHunter.mhunter.service.EventRequestStatusService;
import com.MHunter.mhunter.struct.EventRequestStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/eventStatus")
@CrossOrigin
public class EventRequestStatusController {
//    @Autowired
//    private EventRequestStatusService eventRequestStatusService;
//
//    @GetMapping("/customQuery/{orgId}/{eventId}")
//    public ResponseEntity<List<EventRequestStatus>> executeCustomQuery(
//            @RequestParam Integer orgId,
//            @RequestParam Integer eventId) {
//        List<EventRequestStatus> results = eventRequestStatusService.executeCustomQuery(orgId, eventId);
//        return new ResponseEntity<>(results, HttpStatus.OK);
//    }
}
