
# Project Title: Photography Studio Website

## Overview

The app is a photography studio website designed to showcase photography services, display portfolios, and allow users to book appointments online. It features various service categories such as wedding, prewedding, portrait, and headshot, with galleries for each service. Additionally, users can book sessions using an integrated calendar system.

### Problem Space

Photography clients often find it challenging to view a photographer's full portfolio and book sessions seamlessly online. This app addresses the need for a streamlined user experience where potential clients can explore photography services, view sample galleries, and book appointments in a user-friendly manner. It simplifies the process of discovering and scheduling photography services while ensuring a visually appealing design.

### User Profile

The target users of the app are potential photography clients, including couples planning weddings, individuals needing professional headshots, and families looking for portrait services. Users can easily navigate the website to view sample work in the galleries, read testimonials from previous clients, and book a photography session online. Special considerations include making the booking process simple and intuitive, and the website should be responsive for mobile and desktop users.

### Features

- **Homepage**: 
  - Displays key sections such as Hero Image Slider, About the Photographer, Services, Testimonials, and a Call to Action for booking (Appointment for consultation)
- **Services Section**:
  - Displays four primary photography services: Wedding, Prewedding, Portrait, and Headshot, with links to detailed galleries for each service.
- **Booking System**:
  - Allows users to book sessions directly online through an integration with Google Calendar and Google Meet.
- **Galleries**:
  - Displays photography portfolios for each service, with individual sections for each couple or event.
  - Users can click on images to view larger versions, with previous/next navigation options.
- **Pricing and FAQ**:
  - Transparent pricing for photography services, along with a frequently asked questions (FAQ) section to address common concerns.
- **Blog Section**:
  - Displays articles about photography techniques, client stories, and more.

## Implementation

### Tech Stack

- **Frontend**: 
  - React.js for building the user interface.
  - React Router for managing navigation between pages.
  - Tailwind CSS or SCSS for styling.
  - Formik for form handling in the booking system.
  - Yup for form validation. (Optional)
  - React Lightbox for gallery image display and navigation.
  
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
   - Includes sections for Hero Image, About, Services, Testimonials, and a Call to Action for booking.
   
2. **Services Page**: 
   - Displays information about four main services with links to individual galleries.
   
3. **Gallery Pages**: 
   - Each service has a separate gallery page with portfolios organized by couple or event.
   
4. **Pricing & Booking**: 
   - Displays transparent pricing information and an FAQ section.
   - Includes an integrated booking system for scheduling appointments.
   
5. **Blog Page**: 
   - Showcases photography-related articles and posts.

### Mockups

- **Wireframes**:
![Home](https://github.com/user-attachments/assets/df6218f9-f475-492d-9f1a-8d06f597a5b5)
![Pricing](https://github.com/user-attachments/assets/60501ae9-2331-4d3a-bd84-66eb88581e78)
![Pricing - Booking](https://github.com/user-attachments/assets/139bb7ed-d218-494d-99c7-d938e5a7f27f)
![Gallery](https://github.com/user-attachments/assets/0b750c94-ce5d-48bb-808e-4c51863bf0ac)
![Gallery - path](https://github.com/user-attachments/assets/08b13edb-6d11-4213-9126-b9b501c79abe)
![Gallery - path - enlarge](https://github.com/user-attachments/assets/75a3578f-3e01-4f76-8170-a6bce25804ae)
![Blog (optional)](https://github.com/user-attachments/assets/db248645-4bb1-42d7-8a7d-c7a0fddd7a8e)

### Data

- **Services**:
  - Service data such as title, description, and image link.
  
- **Galleries**:
  - Organized by service type (e.g., Wedding, Prewedding), with image links, couple names, and event descriptions.

- **Testimonials**:
  - Stores client names, feedback, and images.
  
- **Booking Data**:
  - Stores client information such as name, email, and appointment date. This data is passed to Google Calendar for meeting creation.

### Endpoints

Since this project relies on external APIs and frontend form handling, there are no backend endpoints required at this time. All external data (such as calendar integration) will be handled via Google Calendar and Google Meet APIs.


## Roadmap

### **Day 1-2:**
   - **Homepage**: 
     - Build the homepage structure with Hero Image, About section, Services, Testimonials, and Call to Action components.
     - Create reusable components for Services and Testimonials.
     - Set up basic navigation with **React Router**.

### **Day 3:**
   - **Gallery Pages**:
     - Implement the Gallery pages for each service type (Wedding, Prewedding, Portrait, Headshot).
     - Implement **React Lightbox** for image enlargement and navigation.

### **Day 4-5:**
   - **Pricing & Booking Page**:
     - Set up the Pricing section with transparent pricing information.
     - Implement the FAQ section with commonly asked questions.
     - Use **Formik** for form handling and **Yup** for form validation in the booking form.
     - Integrate **Google Calendar API** to handle bookings and **Google Meet API** to generate meeting links.
     - Ensure form validation and submission are functioning correctly.

### **Day 6:**
   - **Blog Page**:
     - Set up a simple blog page with static articles and photography tips.
     - Ensure navigation and responsive design are functioning as expected.

### **Day 7:**
   - **Testing & Optimization**:
     - Test all major components and forms for functionality, responsiveness, and performance.
     - Fix any bugs or issues that arise.
     - Conduct performance optimization (e.g., lazy loading for images) and finalize the project.

---

### **Future Implementations:**
- **Instagram Feed**: Dynamically display Instagram posts.
- **Advanced Blog Features**: Implement a CMS for easy blog content updates.
- **Client Management System**: Add client history tracking and automated reminders for appointments.
- **Visual Enhancements**: Add animations and enhanced visual effects to improve user engagement.
