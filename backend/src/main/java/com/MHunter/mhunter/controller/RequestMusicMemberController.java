package com.MHunter.mhunter.controller;

import com.MHunter.mhunter.model.RequestMusicMember;
import com.MHunter.mhunter.model.RequestMusicMemberId;
import com.MHunter.mhunter.service.RequestMusicMemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/requestMusicMember")
public class RequestMusicMemberController {
    @Autowired
    private RequestMusicMemberService requestMusicMemberService;

    @PostMapping("/add")
    public String save(@RequestBody RequestMusicMember requestMusicMember){
         requestMusicMember.setRequestDate(LocalDateTime.now());
         requestMusicMemberService.saveRequestMusicMember(requestMusicMember);
         return "added";
    }

    @GetMapping("/view")
    public List<RequestMusicMember> viewAll(){
        return requestMusicMemberService.viewAll();
    }

    @GetMapping("/view/{mid}/{eventId}")
    public RequestMusicMember viewSpecific(@PathVariable int mid,@PathVariable int eventId){
        RequestMusicMemberId id = new RequestMusicMemberId();
        id.setMMID(mid);
        id.setEventId(eventId);
        return requestMusicMemberService.findSpecific(id);
    }

    @PutMapping("/update/{mid}/{eventId}")
    public RequestMusicMember update(@RequestBody RequestMusicMember requestMusicMember, @PathVariable int mid,@PathVariable int eventId){
        RequestMusicMemberId id = new RequestMusicMemberId();
        id.setMMID(mid);
        id.setEventId(eventId);
      return   requestMusicMemberService.updateRequestMusicMember(requestMusicMember,id);
    }

    @DeleteMapping("/delete/{mid}/{eventId}")
    public String delete(@PathVariable int mid,@PathVariable int eventId){
        RequestMusicMemberId id =new RequestMusicMemberId();
        id.setMMID(mid);
        id.setEventId(eventId);
        requestMusicMemberService.deleteRequestMusicMember(id);
        return "deleted";
    }

//    give no of pending requests
    @GetMapping("/noOfPendingRequest/{mid}")
    public int noOfPendingRequest(@PathVariable int mid){
        return requestMusicMemberService.countPendingRequest(mid);
    }

//    find by id
    @GetMapping("/eventsSpecificMMID/{mid}")
    public

}
