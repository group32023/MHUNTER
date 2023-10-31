package com.MHunter.mhunter.controller;

import com.MHunter.mhunter.model.*;
import com.MHunter.mhunter.service.EventService;
import com.MHunter.mhunter.service.IncomeArtistService;
import com.MHunter.mhunter.service.OrganizerService;
import com.MHunter.mhunter.service.UserService;
import com.MHunter.mhunter.struct.EventOrganizer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.MHunter.mhunter.model.Event;
import com.MHunter.mhunter.model.Organizer;
import com.MHunter.mhunter.model.User;

import java.lang.reflect.Array;
import java.time.*;
import java.time.chrono.ChronoLocalDate;
import java.time.chrono.ChronoLocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/artistIncome")
public class IncomeArtistController {
    @Autowired
    private IncomeArtistService incomeArtistService;
    @Autowired
    private EventService eventService;

    @Autowired
    private OrganizerService organizerService;

    @Autowired
    private UserService userService;


    @PostMapping("/add")
    public String save(@RequestBody IncomeArtist incomeArtist){
         incomeArtistService.saveIncome(incomeArtist);
         return "Income Added";
    }

    @GetMapping("/specificArtistIncome/{mmid}/{eventId}")
    public IncomeArtist viewSpecificArtistIncome(@PathVariable int mmid,@PathVariable int eventId){
        IncomeArtistId id = new IncomeArtistId(mmid,eventId);
        IncomeArtist income = incomeArtistService.viewSpecificIncome(id);
        return income;
    }

//    find the specific arist's income list
    @GetMapping("/specificArtistIncomeList/{mmid}")
    public List<IncomeArtist> viewSpecificArtistIncomeList(@PathVariable int mmid){
        return incomeArtistService.viewListOfArtistIncomes(mmid);

    }
    @GetMapping("/specificArtistIncomeDetails/{mmid}")
    public List<EventOrganizer> viewSpecificArtistIncomeDetails(@PathVariable int mmid) {
        List<IncomeArtist> incomeList = incomeArtistService.viewListOfArtistIncomes(mmid);
        List<EventOrganizer> eventOrganizerList = new ArrayList<>();
          incomeList.forEach((res->{
              Event event = eventService.viewSpecificEvent(res.getId().getEventId());
              Organizer organizer = organizerService.findSpecificOrganizer(event.getOrgID());
              User user = userService.findSpecificUser(organizer.getUser().getUserId());
              EventOrganizer eventOrganizer = new EventOrganizer();
              eventOrganizer.setIncome(res.getIncome());
              eventOrganizer.setOrgId(event.getOrgID());
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


          }

                  ));



        return eventOrganizerList;
    }

    @GetMapping("/specificArtistIncomeDetailsOntoday")
    public List<EventOrganizer> specificArtistIncomeDetailsOntoday(
            @RequestParam(value = "eventType", required = false) String eventType,
            @RequestParam(value = "fromDate", required = false) LocalDate fromDate,
            @RequestParam(value = "toDate", required = false) LocalDate toDate,
            @RequestParam(value = "mmid") int mmid) {

        ChronoLocalDateTime<?> fromDate1;
        ChronoLocalDateTime<?> toDate1;

//        List<IncomeArtist> incomeList = incomeArtistService.viewListOfArtistIncomes(mmid);
        List<EventOrganizer> eventOrganizerFullList = viewSpecificArtistIncomeDetails(mmid);
        List<EventOrganizer> eventOrganizerList = new ArrayList<>();

        if(fromDate != null){
             fromDate1 = fromDate.atStartOfDay();
        } else {
            fromDate1 = null;
        }
        if(toDate != null){
             toDate1 = toDate.atStartOfDay();
        }
        else {
            toDate1 = null;
        }

        System.out.println(fromDate);
        eventOrganizerFullList.forEach((res-> {
            ChronoLocalDateTime<?> getDate = res.getDate().atStartOfDay();


            if (!eventType.isEmpty() && fromDate ==null && toDate == null){
                if (res.getEventType().equals(eventType)){
                    eventOrganizerList.add(res);
                }
            }
            else if(eventType.isEmpty() && fromDate != null && toDate == null){
                if(getDate.compareTo(fromDate1)>0){
                    eventOrganizerList.add(res);
                }
            }
            else if(eventType.isEmpty() && fromDate == null && toDate != null){
                if(getDate.compareTo(toDate1)<0){
                    eventOrganizerList.add(res);
                }
            }
            else if(!eventType.isEmpty() && fromDate == null && toDate != null){
                if(getDate.compareTo(toDate1)<0 && res.getEventType().equals(eventType)){
                    eventOrganizerList.add(res);
                }
            }
            else if(!eventType.isEmpty() && fromDate != null && toDate == null){
                if(getDate.compareTo(fromDate1)>0 && res.getEventType().equals(eventType)){
                    eventOrganizerList.add(res);
                }
            }
            else if(!eventType.isEmpty() && fromDate != null && toDate != null){

                if(getDate.compareTo(toDate1)<0 && getDate.compareTo(fromDate1)>0 && res.getEventType().equals(eventType)){
                    eventOrganizerList.add(res);
                }
            }
            else{
                eventOrganizerList.add(res);
            }
        }

        ));



        return eventOrganizerList;
    }



    // give monthly growth and income
    @GetMapping("/incomeAndMonthlyGrowth/{mmid}")
    public List<Double> getIncomeAndMonthlyGrowthOfArtist(@PathVariable int mmid){
        double lastMonthIncome = 0;
        double firstMonthIncome = 0;
        int year;
        int firstYear;
        int firstMonthVal;
        int firstDay;
        int currentYear;
        int date;
        int currentMonthVal;
        int diffMonth = 1;

        List<Double> monthlyGrowthAndIncome= new ArrayList<>(2);
        monthlyGrowthAndIncome.add(0.0);
        monthlyGrowthAndIncome.add(0.0);
        List<IncomeArtist> incomeList = incomeArtistService.viewListOfArtistIncomes(mmid);

// hello
//        get the monthly income
        for(int i=0;i<incomeList.size();i++){

            LocalDateTime dateTime = LocalDateTime.parse(incomeList.get(i).getDate().toString());
            LocalDateTime dateTime2 = LocalDateTime.parse(incomeList.get(0).getDate().toString());

            //last date
            Month month = dateTime.getMonth();
            year = dateTime.getYear();


            //first date
            Month firstMonth = dateTime2.getMonth();
            firstYear = dateTime2.getYear();
            firstMonthVal = dateTime2.getMonth().getValue();
            firstDay = dateTime2.getDayOfMonth();

//            current date
            Month currentMonth = LocalDate.now().getMonth();
            currentYear = LocalDate.now().getYear();
            date = LocalDate.now().getDayOfMonth();
            currentMonthVal = LocalDate.now().getMonth().getValue();

//            get the period of first and last months
            LocalDate startDate = LocalDate.of(firstYear,firstMonthVal,firstDay);
            LocalDate lastDate = LocalDate.of(currentYear,currentMonthVal,date);
            Period period = Period.between(startDate,lastDate);
            diffMonth = period.getYears()*12 + period.getMonths();
            if(diffMonth == 0){
                diffMonth =1;
            }


            if(month == currentMonth && year == currentYear){
                if(month == firstMonth){
                    firstMonthIncome += incomeList.get(i).getIncome();
                }
                lastMonthIncome += incomeList.get(i).getIncome();

            }
            else {
                if(month == firstMonth && year == firstYear){
                    firstMonthIncome += incomeList.get(i).getIncome();
                }
            }

        }

        double monthlyGrowth =Math.round(((Math.pow((lastMonthIncome/firstMonthIncome),(1/diffMonth)))-1)*100);

        monthlyGrowthAndIncome.set(0,lastMonthIncome);
        monthlyGrowthAndIncome.set(1,monthlyGrowth);

        return monthlyGrowthAndIncome;
    }

    @GetMapping("/monthlyOvercome/{mmid}")
    public double[] monthlyOvercome(@PathVariable int mmid){
       double[] monthlyEarning = {0,0,0,0,0,0,0,0,0,0,0,0};
       List<IncomeArtist> incomeArtistList = incomeArtistService.viewListOfArtistIncomes(mmid);
       int currentYear = LocalDate.now().getYear();
       if(incomeArtistList.size() >0) {
           incomeArtistList.forEach(item -> {
               LocalDateTime dateTime = LocalDateTime.parse(item.getDate().toString());
               if (currentYear == dateTime.getYear()) {
                   int month = dateTime.getMonth().getValue();
                   monthlyEarning[month - 1] = monthlyEarning[month - 1] + item.getIncome();
               }
           });
       }
        System.out.println(monthlyEarning[0]);
       return monthlyEarning;
    }


}
