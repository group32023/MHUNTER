import React, { useState } from 'react'
import dayjs from 'dayjs';
import Badge from '@mui/material/Badge';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import '../../assets/css/calendarEvent.css'
import { Prev } from 'react-bootstrap/esm/PageItem';

// show the actual date of upcomming date
const currentDate = new Date();
const initialValue = dayjs(currentDate.toLocaleDateString());

function ServerDay(props) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

  const isSelected =
    !props.outsideCurrentMonth && highlightedDays.includes(day.format('YYYY-MM-DD'));


  return (
    <Badge
      key={props.day.toString()}
      overlap="circular"
      badgeContent={isSelected ? '🌚' : undefined}
    >
      <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
    </Badge>
  );
}

export default function CalendarEvent() {
  const requestAbortController = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [highlightedDays, setHighlightedDays] = React.useState([]);

  const [upCommingEvent,setUpCommingEvents] = useState([])

  const fetchHighlightedDays = (date) => {
    const controller = new AbortController();
    fetch("http://localhost:8080/requestMusicMember/viewEventList/758463", { signal: controller.signal }).then((res)=>res.json()).then((result)=>{
      setUpCommingEvents(result);
      result.forEach(res => {
        setHighlightedDays((prevDays) => {
          const newDays =[...prevDays, res.date];
          return newDays;
        }
        )

      });
      setIsLoading(false)
    }).catch((error)=>{
      if(error.name !=='AbortError'){
        throw error;
      }
    })
    

    requestAbortController.current = controller;
  };


  React.useEffect(() => {
    fetchHighlightedDays(initialValue);
    // abort request on unmount
    return () => requestAbortController.current?.abort();
  }, []);



  const handleMonthChange = (date) => {
    if (requestAbortController.current) {
      // make sure that you are aborting useless requests
      // because it is possible to switch between months pretty quickly
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    setHighlightedDays([]);
    fetchHighlightedDays(date);
  };

  return (
    
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        defaultValue={initialValue}
        loading={isLoading}
        onMonthChange={handleMonthChange}
        renderLoading={() => <DayCalendarSkeleton />}
        slots={{
          day: ServerDay,
        }}
        slotProps={{
          day: {
            highlightedDays,
          },
        }}
      />
    </LocalizationProvider>
  );
}

