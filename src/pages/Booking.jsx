// src/pages/AppointmentPage.jsx
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // 样式引入

function AppointmentPage() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    // 模拟发送日期功能
    alert(`Selected date: ${selectedDate.toDateString()}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Book an Appointment</h1>
      <Calendar onChange={handleDateChange} value={date} />
    </div>
  );
}

export default AppointmentPage;



// .react-calendar {
//     width: 350px;
//     background-color: white;
//     border-radius: 10px;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   }
  
//   .react-calendar__tile--active {
//     background-color: #3b82f6;
//     color: white;
//   }
  
//   .react-calendar__tile {
//     border-radius: 5px;
//   }
  