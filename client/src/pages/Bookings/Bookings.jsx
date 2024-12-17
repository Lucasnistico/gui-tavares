import React, { useState, useEffect } from "react";
import "./Bookings.scss";
import Hero from "../../components/Hero/Hero.jsx";

const handlePayment = () => {
  alert("Redirecting to payment...");
  window.location.href = "/payment";
};

export default function Bookings() {
  const [availableSlots, setAvailableSlots] = useState([]);

  useEffect(() => {
    const fetchAvailableSlots = async () => {
      try {
        const response = await fetch("YOUR_BACKEND_API/calendar/slots");
        const data = await response.json();
        setAvailableSlots(data.slots);
      } catch (error) {
        console.error("Error fetching calendar slots:", error);
      }
    };
    fetchAvailableSlots();
  }, []);

  return (
    <>
      <section className="bookings">
        <div className="bookings__content">
          <h1 className="bookings__title">Book a Session</h1>
          <p className="bookings__subtitle">
            Reserve a time slot after payment is processed...
          </p>
          <button className="bookings__btn" onClick={handlePayment}>
            Proceed to Payment
          </button>
          <div className="bookings__slots">
            <h2>Available Slots!</h2>
            <ul>
              {availableSlots.length > 0 ? (
                availableSlots.map((slot, index) => (
                  <li key={index}>
                    {slot.date} at {slot.time}
                  </li>
                ))
              ) : (
                <p className="bookings__slots-message">
                  {" "}
                  Please check after payment!
                </p>
              )}
            </ul>
          </div>
        </div>
      </section>
      <Hero></Hero>
    </>
  );
}
