import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../assets/css/DashboardCalenderComponent.css';

const DashboardCalender = () => {
    const [date, setDate] = useState(new Date());

    const handleDateChange = (newDate) => {
        setDate(newDate);
    };
    return (

        <div className="calendar mt-1" style={{ backgroundColor: '#2f363e' }}>
            <Calendar onChange={handleDateChange} value={date} />
        </div>

    )
}

export default DashboardCalender