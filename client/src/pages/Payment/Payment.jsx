import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import "./Payment.scss";

const stripePromise = loadStripe("your-publishable-key-here");

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      console.log("PaymentMethod:", paymentMethod);
      alert("Payment confirmed!");
      setSuccess(true);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment__form">
      <CardElement className="payment__card-element" />
      <button
        type="submit"
        disabled={!stripe || loading}
        className="payment__btn"
      >
        {loading ? "Processing..." : "Pay"}
      </button>
      {error && <div className="payment__error">{error}</div>}
      {success && <div className="payment__success">Payment successful!</div>}
    </form>
  );
}

export default function Payment() {
  return (
    <section className="payment">
      <div className="payment__content">
        <h1 className="payment__title">Payment</h1>
        <p className="payment__subtitle">
          Confirm your payment to proceed with booking.
        </p>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </section>
  );
}
