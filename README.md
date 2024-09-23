
# Project Title: Photography Studio Website


## How to start

1. cd cfp-studio
2. npm i
3. cp .env.example .env.local
   <!-- update .env.local accordingly -->
4. npm run build
   npm run start
   npm run dev


## Overview

The app is a photography studio website designed to showcase photography services, display portfolios, and allow users to book appointments online. It features various service categories such as wedding, prewedding, portrait, and headshot, with galleries for each service. Additionally, users can book sessions using an integrated calendar system.

### Problem Space

Photography clients often find it challenging to view a photographer's full portfolio and book sessions seamlessly online. This app addresses the need for a streamlined user experience where potential clients can explore photography services, view sample galleries, and book appointments in a user-friendly manner. It simplifies the process of discovering and scheduling photography services while ensuring a visually appealing design.

### User Profile

The target users of the app are potential photography clients, including couples planning weddings, individuals needing professional headshots, and families looking for portrait services. Users can easily navigate the website to view sample work in the galleries, and book a consultant session online. Special considerations include making the booking process simple and intuitive, and the website should be responsive for mobile and desktop users.

### Features

- **Homepage**: 
  - Displays key sections such as Hero Image Slider, About the Branding, Services.

- **Pricing and Booking System**:
  - Allows users to book sessions directly online through an integration with Google Calendar and Google Meet.

- **Galleries**:
  - Displays photography portfolios for mix version (MVP)
  - Users can click on images to view larger versions, with previous/next navigation options.


## Implementation

### Tech Stack

- **Frontend**: 
  - React.js for building the user interface.
  - React Router for managing navigation between pages.
  - SCSS for styling.
  
- **Libraries**:
  - Google Calendar API for handling bookings.
  - Google Meet API for generating meeting links.
  - React Modal for image enlargement and navigation.

### APIs

- **Google Calendar API**: 
  - To manage online bookings and send calendar invitations to clients.
  
- **Google Meet API**: 
  - To automatically generate video meeting links for virtual consultations.

### Sitemap

1. **Homepage**: 
   - Includes sections for Hero Image, About, Services.
   
2. **Gallery Page**: 
   - A gallery page with portfolios.
   
3. **Pricing & Booking**: 
   - Displays transparent pricing information.
   - Includes an integrated booking system for scheduling appointments.
  

### Mockups

- **Wireframes**:


### Data

- **Gallery Images Data**
  - Store Pictures for gallery grid 
- **Service Data**
  - Store Picture as bg and subtitle for each pictures
- **Pricing Data**
  - Store different packages and info


### Endpoints

Since this project relies on external APIs and frontend form handling, there are no backend endpoints required at this time. All external data (such as calendar integration) will be handled via Google Calendar and Google Meet APIs.

---

### **Nice to have:**
- **FAQ**
- **Testimonials**
- **Instagram Feed**: Dynamically display Instagram posts.
- **Advanced Blog Features**: Implement a CMS for easy blog content updates.
- **Client Management System**: Add client history tracking and automated reminders for appointments.
- **Visual Enhancements**: Add animations and enhanced visual effects to improve user engagement.
- **Blog Page**:
  - Set up a simple blog page with static articles and photography tips.
  - Ensure navigation and responsive design are functioning as expected.
