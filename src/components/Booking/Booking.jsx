import React, { useState } from "react";
import "./Booking.scss";

export default function Booking() {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleBookingClick = () => {
    setShowCalendar(true); // 点击按钮时显示日历
  };

  return (
    <div className="booking-section">
      <p className="booking-section__text">
        If you're interested in booking one of my packages, 
        or if none of the packages meet your specific needs, 
        please book a 30-minute meeting with me to discuss 
        your requirements in detail.
      </p>
      <button 
        className="booking-section__btn"
        onClick={handleBookingClick}
      >
        Book an appointment
      </button>

      {showCalendar && (
        <div className="calendar-popup">
          <p>Calendar Placeholder</p>
        </div>
      )}
    </div>
  );
}
