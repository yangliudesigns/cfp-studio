import React, { useState, useEffect, useRef } from "react";
import "./Booking.scss";

let tokenClient;

export default function Booking() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const dateTimeRef = useRef({ date: "", time: "" });

  const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
  const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];

  useEffect(() => {
    function initializeGapiClient() {
      window.gapi.client
        .init({
          apiKey: API_KEY,
          discoveryDocs: DISCOVERY_DOCS,
        })
        .then(() => {
          console.log("GAPI client initialized successfully");
        })
        .catch((error) => {
          console.error("GAPI client initialization failed:", error);
        });
    }

    window.gapi.load("client", initializeGapiClient);

    if (window.google && window.google.accounts) {
      tokenClient = window.google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: "https://www.googleapis.com/auth/calendar.events",
        callback: (tokenResponse) => {
          if (tokenResponse && tokenResponse.access_token) {
            console.log("Preparing to create calendar event");
            createGoogleCalendarEvent();
          } else {
            console.error("Failed to obtain valid access token");
          }
        },
      });
    } else {
      console.error("Google Identity Services SDK not loaded");
    }
  }, [API_KEY, CLIENT_ID]);

  const handleBookingClick = () => {
    setShowCalendar(true);
  };

  const handleDateSelect = (event) => {
    const selectedDate = event.target.value;
    setSelectedDate(selectedDate);
    dateTimeRef.current.date = selectedDate;
  };

  const handleTimeSelect = (event) => {
    const selectedTime = event.target.value;
    setSelectedTime(selectedTime);
    dateTimeRef.current.time = selectedTime;
  };

  const handleConfirmBooking = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select a date and time for your booking");
      return;
    }

    if (tokenClient) {
      tokenClient.requestAccessToken();
    } else {
      console.error("Token Client not initialized");
    }
  };

  const createGoogleCalendarEvent = () => {
    const { date: selectedDate, time: selectedTime } = dateTimeRef.current;

    if (!selectedDate || !selectedTime) {
      console.error("Missing required information");
      alert("Please select a date and time for your booking");
      return;
    }

    const startDateTime = new Date(`${selectedDate}T${selectedTime}`);
    if (isNaN(startDateTime.getTime())) {
      console.error("Invalid date or time");
      alert("The selected date or time is invalid. Please choose again");
      return;
    }

    const endDateTime = new Date(startDateTime.getTime() + 30 * 60 * 1000); // 30min consultant

    const event = {
      summary: "30-Minute Consultation for Photography Services",
      description: "A new booking from your cfp website",
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      attendees: [
        { email: 'yangliudesigns@gmail.com' }
      ],
      sendUpdates: 'all',
      conferenceData: {
        createRequest: {
          requestId: `booking-conference-${Date.now()}`,
          conferenceSolutionKey: { type: "hangoutsMeet" },
        },
      },
    };

    window.gapi.client.calendar.events
      .insert({
        calendarId: "primary",
        resource: event,
        conferenceDataVersion: 1,
        sendUpdates: 'all',
      })
      .then((response) => {
        console.log("Event created successfully:", response);
        if (response.result && response.result.hangoutLink) {
          alert(`Booking successful! Google Meet link: ${response.result.hangoutLink}`);
        } else {
          alert("Booking successful, but no Google Meet link was generated.");
        }
      })
      .catch((error) => {
        console.error("Failed to create event:", error);
        if (error.result) {
          console.error("Error details:", JSON.stringify(error.result, null, 2));
        }
        alert("Booking failed. Please try again later. Check the console for more information.");
      });
  };

  return (
    <div className="booking-section">
      <p className="booking-section__text">
      If you're interested in any of my photography services, 
      or if you'd like to discuss a customized package, feel free 
      to schedule a 30-minute consultation with me to go over 
      your specific needs.
      </p>
      <button className="booking-section__btn" onClick={handleBookingClick}>
        Book an appointment
      </button>

      {showCalendar && (
        <div className="calendar-popup">
          <input 
            type="date" 
            onChange={handleDateSelect} 
            value={selectedDate} 
          />
          <input 
            type="time" 
            onChange={handleTimeSelect} 
            value={selectedTime} 
          />
          <button className="confirm-button" onClick={handleConfirmBooking}>
            Confirm Booking
          </button>
        </div>
      )}
    </div>
  );
}
