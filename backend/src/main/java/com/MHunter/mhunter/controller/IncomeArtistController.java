package com.MHunter.mhunter.controller;

import com.MHunter.mhunter.model.Event;
import com.MHunter.mhunter.model.IncomeArtist;
import com.MHunter.mhunter.model.IncomeArtistId;
import com.MHunter.mhunter.service.EventService;
import com.MHunter.mhunter.service.IncomeArtistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/artistIncome")
public class IncomeArtistController {
    @Autowired
    private IncomeArtistService incomeArtistService;
    @Autowired
    private EventService eventService;

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
    public List<Event> viewSpecificArtistIncomeDetails(@PathVariable int mmid) {
        List<IncomeArtist> incomeList = incomeArtistService.viewListOfArtistIncomes(mmid);
        List<Event> eventDetails=new ArrayList<Event>();
        incomeList.forEach(incomeArtist ->
                eventDetails.add(eventService.viewSpecificEvent(incomeArtist.getId().getEventId())));

        return eventDetails;
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

}
