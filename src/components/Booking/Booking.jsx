import React, { useState, useEffect } from "react";
import "./Booking.scss";
import { gapi } from "gapi-script";

export default function Booking() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const CLIENT_ID = "573069757343-sfosnmbi1gosfp2nbj6p01tqprvav1gd.apps.googleusercontent.com";  
  const API_KEY = "AIzaSyAq1Zs7W8HOzO98g-aX09TIg4cAf96pBpY";
  const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
  const SCOPES = "https://www.googleapis.com/auth/calendar.events";

  useEffect(() => {
    function start() {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  const handleBookingClick = () => {
    setShowCalendar(true); // 打开日历选择弹出框
  };

  const handleDateSelect = (event) => {
    setSelectedDate(event.target.value); // 保存用户选择的日期
  };

  const handleTimeSelect = (event) => {
    setSelectedTime(event.target.value); // 保存用户选择的时间
  };

  const handleConfirmBooking = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select a date and time for the booking."); // 提醒用户选择日期和时间
      return;
    }

    // 进行 OAuth2 登录并确认 Google Calendar 预定
    gapi.auth2.getAuthInstance().signIn().then(() => {
      const event = {
        summary: "New Booking", // 事件名称
        start: {
          dateTime: `${selectedDate}T${selectedTime}:00`, // 事件开始时间
          timeZone: "America/Toronto",
        },
        end: {
          dateTime: `${selectedDate}T${parseInt(selectedTime) + 1}:00`, // 事件结束时间（假设持续一小时）
          timeZone: "America/Toronto",
        },
      };

      // 向 Google Calendar API 发送事件请求
      const request = gapi.client.calendar.events.insert({
        calendarId: "primary",
        resource: event,
      });

      // 处理请求响应
      request.execute((event) => {
        if (event.htmlLink) {
          alert(`Booking confirmed! View it in your Google Calendar: ${event.htmlLink}`);
        } else {
          alert("An error occurred while booking the event.");
        }
      });
    });
  };

  return (
    <div className="booking-section">
      <p className="booking-section__text">
        If you're interested in booking one of my packages, 
        or if none of the packages meet your specific needs, 
        please book a 30-minute meeting with me to discuss 
        your requirements in detail.
      </p>
      <button className="booking-section__btn" onClick={handleBookingClick}>
        Book an appointment
      </button>

      {showCalendar && (
        <div className="calendar-popup">
          <input type="date" onChange={handleDateSelect} value={selectedDate} />
          <input type="time" onChange={handleTimeSelect} value={selectedTime} />
          <button className="confirm-button" onClick={handleConfirmBooking}>
            Confirm Booking
          </button>
        </div>
      )}
    </div>
  );
}
