import React from "react";
import "./Bookings.scss";
import Hero from "../../components/Hero/Hero.jsx";

const Bookings = () => {
  return (
    <>
      <section className="bookings">
        <div className="bookings__calendar">
          <div className="bookings__frame">
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ39ie8jRjZs0ke3k2UQxsWUxdTlAFzyloG-n5z9nEaqZC0DDMofWGTMcBE0BjAhZUjkJYXEi7Nu?gv=true"
              style={{ border: "0" }}
              frameBorder="0"
              title="Google Calendar Booking"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      <Hero />
    </>
  );
};

export default Bookings;
