package com.MHunter.mhunter.controller;

import com.MHunter.mhunter.exception.UserNotFoundException;
import com.MHunter.mhunter.model.*;
import com.MHunter.mhunter.service.*;
import com.MHunter.mhunter.struct.EventOrganizer;
import com.MHunter.mhunter.struct.EventRequestStatus;
import com.MHunter.mhunter.struct.UserMusicMember;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.*;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

@RequestMapping("/requestMusicMember")
public class RequestMusicMemberController {
    @Autowired
    private RequestMusicMemberService requestMusicMemberService;
    @Autowired
    private EventService eventService;

    @Autowired
    private UserService userService;

    @Autowired
    private OrganizerService organizerService;

    @Autowired
    private IncomeArtistService incomeArtistService;

    @Autowired
    private MusicMemberService musicMemberService;

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
        System.out.println(mid);
        System.out.println(eventId);
        RequestMusicMemberId id = new RequestMusicMemberId();
        id.setMMID(mid);
        id.setEventId(eventId);
        System.out.println("come here");
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

    //view pending requests
    @GetMapping("/pendingRequest/{mid}")
    public List<EventOrganizer> pendingRequest(@PathVariable int mid){

        List<RequestMusicMember> eventList = requestMusicMemberService.pendingRequest(mid);
        List<EventOrganizer> eventOrganizerList = new ArrayList<>();

        eventList.forEach(res ->{
            Event event = eventService.viewSpecificEvent(res.getRequestMusicMemberId().getEventId());
            Organizer organizer = organizerService.findSpecificOrganizer(res.getOrgId());
            User user = userService.findSpecificUser(organizer.getUser().getUserId());

            EventOrganizer eventOrganizer = new EventOrganizer();
            eventOrganizer.setOrgId(res.getOrgId());
            eventOrganizer.setEventId((event.getEventID()));
            eventOrganizer.setOrganizerName(user.getFirstName() + " " +  user.getLastName());
            eventOrganizer.setEventName(event.getEvent_name());
            eventOrganizer.setEventType(event.getEvent_type());
            eventOrganizer.setStartTime(event.getStart_time());
            eventOrganizer.setPlace(event.getTown());
            eventOrganizer.setDate(event.getDate());
            eventOrganizer.setCrowd(event.getCrowd());

            Duration difference = Duration.between( event.getStart_time(),event.getEnd_time());
            long hours = difference.toHours();
            long minutes = difference.toMinutes() % 60;
            if(minutes==0){
                eventOrganizer.setDuration(hours + " hours ");

            }
            else{
                eventOrganizer.setDuration(hours + " hours and " + minutes + " minutes");

            }
            eventOrganizerList.add(eventOrganizer);


            //System.out.println(eventOrganizer);
        });

        return eventOrganizerList;
    }


    @GetMapping("/priorBooking/{mid}/{orgId}")
    public List<EventOrganizer> priorBooking(@PathVariable int mid, @PathVariable int orgId){

        List<RequestMusicMember> eventList = requestMusicMemberService.findConformationEventsByMMIDForOrg(mid,orgId);
        List<EventOrganizer> eventOrganizerList = new ArrayList<>();

        eventList.forEach(res ->{
            Event event = eventService.viewSpecificEvent(res.getRequestMusicMemberId().getEventId());
            Organizer organizer = organizerService.findSpecificOrganizer(res.getOrgId());
            User user = userService.findSpecificUser(organizer.getUser().getUserId());
            EventOrganizer eventOrganizer = new EventOrganizer();
            IncomeArtistId id = new IncomeArtistId(mid,res.getRequestMusicMemberId().getEventId());
            IncomeArtist incomeArtist = incomeArtistService.viewSpecificIncome(id);
            eventOrganizer.setIncome(incomeArtist.getIncome());
            eventOrganizer.setEventId((event.getEventID()));
            eventOrganizer.setOrgId(res.getOrgId());
            eventOrganizer.setOrganizerName(user.getFirstName() + " " +  user.getLastName());
            eventOrganizer.setEventName(event.getEvent_name());
            eventOrganizer.setEventType(event.getEvent_type());
            eventOrganizer.setStartTime(event.getStart_time());
            eventOrganizer.setPlace(event.getTown());
            eventOrganizer.setDate(event.getDate());
            eventOrganizer.setCrowd(event.getCrowd());
            Duration difference = Duration.between( event.getStart_time(),event.getEnd_time());
            long hours = difference.toHours();
            long minutes = difference.toMinutes() % 60;
            if(minutes==0){
                eventOrganizer.setDuration(hours + " hours ");

            }
            else{
                eventOrganizer.setDuration(hours + " hours and " + minutes + " minutes");

            }
            eventOrganizerList.add(eventOrganizer);


            //System.out.println(eventOrganizer);
        });

        return eventOrganizerList;
    }


    @GetMapping("/eventsOn/{mid}/{date}")
    public List<EventOrganizer> eventsOn(@PathVariable int mid, @PathVariable LocalDate date){

        List<RequestMusicMember> requestMusicMembersList = requestMusicMemberService.findConformationEventsByMMID(mid);
        List<EventOrganizer> eventOrganizerList = new ArrayList<>();
        requestMusicMembersList.forEach(res ->{
            Event event = eventService.viewSpecificEvent(res.getRequestMusicMemberId().getEventId());

            if(date.equals(event.getDate()) ){

                Organizer organizer = organizerService.findSpecificOrganizer(res.getOrgId());
                User user = userService.findSpecificUser(organizer.getUser().getUserId());
                EventOrganizer eventOrganizer = new EventOrganizer();
                IncomeArtistId id = new IncomeArtistId(mid,res.getRequestMusicMemberId().getEventId());
                IncomeArtist incomeArtist = incomeArtistService.viewSpecificIncome(id);
                eventOrganizer.setIncome(incomeArtist.getIncome());
                eventOrganizer.setEventId((event.getEventID()));
                eventOrganizer.setOrgId(res.getOrgId());
                eventOrganizer.setOrganizerName(user.getFirstName() + " " +  user.getLastName());
                eventOrganizer.setEventName(event.getEvent_name());
                eventOrganizer.setEventType(event.getEvent_type());
                eventOrganizer.setStartTime(event.getStart_time());
                eventOrganizer.setPlace(event.getTown());
                eventOrganizer.setDate(event.getDate());
                eventOrganizer.setCrowd(event.getCrowd());
                Duration difference = Duration.between( event.getStart_time(),event.getEnd_time());
                long hours = difference.toHours();
                long minutes = difference.toMinutes() % 60;
                if(minutes==0){
                    eventOrganizer.setDuration(hours + " hours ");

                }
                else{
                    eventOrganizer.setDuration(hours + " hours and " + minutes + " minutes");

                }
                eventOrganizerList.add(eventOrganizer);


            }

        });

        return eventOrganizerList;
    }






    //    find by id
    @GetMapping("/monthlyGrowth/{mid}")
    public Double getEventsByMMID(@PathVariable int mid){
        List<RequestMusicMember> reqData = requestMusicMemberService.findEventsByMMID(mid);
        LocalDateTime dateTime = LocalDateTime.parse(reqData.get(0).getRequestDate().toString());

        AtomicInteger firstMonthRequests= new AtomicInteger();
        AtomicInteger lastMonthRequests = new AtomicInteger();


        Month firstMonth = dateTime.getMonth();
        int firstYear = dateTime.getYear();
        int firstDay = dateTime.getDayOfMonth();

        LocalDateTime dateTime1 = LocalDateTime.parse(reqData.get(reqData.size()-1).getRequestDate().toString());
        Month lastMonth = dateTime1.getMonth();
        int lastYear = dateTime1.getYear();
        int lastDay = dateTime1.getDayOfMonth();

        reqData.forEach(res ->{
            LocalDateTime dateTime2 = LocalDateTime.parse(res.getRequestDate().toString());
            Month month = dateTime2.getMonth();
            int year = dateTime2.getYear();
            if(month == firstMonth && year == firstYear){
                firstMonthRequests.set(firstMonthRequests.get() + 1);
            }
            else {
                if(month == lastMonth && year == lastYear){
                    lastMonthRequests.set(lastMonthRequests.get() + 1);
                 }
            }
        });

        LocalDate startDate = LocalDate.of(firstYear,firstMonth,firstDay);
        LocalDate lastDate = LocalDate.of(lastYear,lastMonth,lastDay);
        Period period = Period.between(startDate,lastDate);
        int diffMonth = period.getYears()*12 + period.getMonths();
        if(diffMonth == 0){
            diffMonth =1;
        }

        System.out.println(lastMonthRequests);
        System.out.println(firstMonthRequests.get());
        System.out.println(diffMonth);

        double monthlyGrowth =Math.round(((Math.pow((lastMonthRequests.get()/firstMonthRequests.get()),(1/diffMonth)))-1)*100);

        return monthlyGrowth;
    }

    @GetMapping("/viewEventList/{mid}")
    public List<Event> getPendingEventsDate(@PathVariable int mid){
        List<RequestMusicMember> requestMusicMembersList = requestMusicMemberService.findConformationEventsByMMID(mid);
        LocalDate currentDate = LocalDate.now();
        List<Event> events = new ArrayList<>();

//        get upcoming events
        requestMusicMembersList.forEach(res ->{
            Event event = eventService.viewSpecificEvent(res.getRequestMusicMemberId().getEventId());

            int year = LocalDate.parse(event.getDate().toString()).getYear();
            Month month = LocalDate.parse(event.getDate().toString()).getMonth();
            int day =LocalDate.parse(event.getDate().toString()).getDayOfMonth();

            LocalDate date = LocalDate.of(year,month,day);

            System.out.println(date);

            if(date.isAfter(currentDate) || date == currentDate){
                events.add(event);
            }
        });

        return events;
    }

    @GetMapping("/viewAllEvents/{mid}")
    public List<EventOrganizer> viewAllEvents(@PathVariable int mid, @RequestParam(required = false,defaultValue = "") String filterValue){
        List<RequestMusicMember> requestMusicMembersList = requestMusicMemberService.findConformationEventsByMMID(mid);
        List<EventOrganizer> eventOrganizerList = new ArrayList<>();

        requestMusicMembersList.forEach(res ->{
            Event event = eventService.viewSpecificEvent(res.getRequestMusicMemberId().getEventId());
            Organizer organizer = organizerService.findSpecificOrganizer(res.getOrgId());
            User user = userService.findSpecificUser(organizer.getUser().getUserId());
            EventOrganizer eventOrganizer = new EventOrganizer();
            eventOrganizer.setOrganizerName(user.getFirstName() + " " +  user.getLastName());
            eventOrganizer.setEventType(event.getEvent_type());
            eventOrganizer.setPlace(event.getTown());
            eventOrganizer.setDate(event.getDate());
            eventOrganizer.setCrowd(event.getCrowd());
            eventOrganizer.setEventId(res.getRequestMusicMemberId().getEventId());
            eventOrganizer.setOrgId(res.getOrgId());
            Duration difference = Duration.between( event.getStart_time(),event.getEnd_time());
            long hours = difference.toHours();
            long minutes = difference.toMinutes() % 60;
            if(minutes==0){
                eventOrganizer.setDuration(hours + " hours ");

            }
            else{
                eventOrganizer.setDuration(hours + " hours and " + minutes + " minutes");
            }
            eventOrganizerList.add(eventOrganizer);
        });
        if(filterValue.equals("")){
            return eventOrganizerList;
        }
        else{
            System.out.println(filterValue.length());
            List<EventOrganizer> newList =eventOrganizerList.stream()
                    .filter(member ->member.getOrganizerName().toLowerCase().contains(filterValue.toLowerCase())
                            || member.getEventType().toLowerCase().contains(filterValue.toLowerCase())
                            || member.getDate().toString().contains(filterValue)
                            || member.getPlace().toLowerCase().contains(filterValue.toLowerCase())
                    ).collect(Collectors.toList());
            return newList;
        }

    }


    @GetMapping("/musicMemberDetails/{mid}")
    public UserMusicMember musicMemberDetails(@PathVariable int mid) {
//        {
//            "userName": "Dinesh Gamage",
//                "address": "252 B/2 Lower Gd Flr Methodist Central Bldg Galle Road, 03",
//                "email": "dinesh@gmail.com"
//        }

      MusicMember musicMember =  musicMemberService.findSpecificMusicMember(mid);
        User user = userService.findSpecificUser(musicMember.getUser().getUserId());
        UserMusicMember userMusicMember = new UserMusicMember();
        userMusicMember.setUserName(musicMember.getName());
        userMusicMember.setAddress(user.getAddress());
        userMusicMember.setEmail(user.getEmail());


        return userMusicMember;
    }

    @GetMapping("/getRowsByEventId/{eventId}")
    public List<Object[]> getRowsByEventId(@PathVariable int eventId){
        List<RequestMusicMember> requestMusicMembersList = requestMusicMemberService.getRowsByEventId(eventId);
        List<Object[]> results = new ArrayList<>();

        for (RequestMusicMember requestMusicMember : requestMusicMembersList) {
            Object[] result = new Object[5];
            result[0] = requestMusicMember.getRequestMusicMemberId().getMMID();
            result[1] = requestMusicMember.getOrgId();
            result[2] = requestMusicMember.getConfirmationStatus();
            result[3] = requestMusicMember.getRequestMusicMemberId().getEventId();

            MusicMember musicMember =  musicMemberService.findSpecificMusicMember(requestMusicMember.getRequestMusicMemberId().getMMID());

            result[4] = musicMember.getName();

            results.add(result);
        }
        return results;

    }




    }
