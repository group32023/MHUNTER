import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";

export default function StripePaymentForm({
  amount,
  paymentType,
  artist_id,
  orgId,
  payee_name,
  invoiceId,
}) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded ! ");
          break;
        case "processing":
          setMessage("Your payment is processing. ");
          break;
        case "requires_payment method":
          setMessage("Your payment was not successful, please try again. ");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      return;
    }

    setIsLoading(true);

    const { paymentIntent, error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/organizer/dashboard",
      },
      redirect: "if_required",
    });

    axios
      .post("http://localhost:8080/success-Payment", {
        amount: amount,
        paymentType: paymentType,
        artist_id: artist_id,
        orgId: orgId,
        payee_name: payee_name,
        invoiceId: invoiceId,
        paymentIntent: paymentIntent.id,
      })
      .then((response) => {
        console.log("Response from Database:", response.data);
        window.location.replace("http://localhost:3000/organizer/dashboard");
      });

    if (
      error &&
      (error.type === "card_error" || error.type === "validation error")
    ) {
      setMessage(error.message);
    } else {
      //setMessage("An unexpected error occurred. ");
      setMessage(" ");
    }

    setIsLoading(false);

    // Delay the redirection for a few seconds (e.g., 3 seconds)
    setTimeout(() => {
      window.location.href = paymentIntent.return_url;
    }, 3000); // Adjust the delay time as needed
  };

  const handleEmailChange = (event) => {
    console.log(event);
  };
  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Adjust this to control the height of the container
        background: "linear-gradient(to bottom, #a26ee0, #68217a)", // Purple gradient background
      }}
    >
      <form
        id="payment-form"
        onSubmit={handleSubmit}
        className="flex-container direction-column"
        style={{
          textAlign: "center",
          padding: "20px",
          borderRadius: "10px",
          background: "white",
        }}
      >
        <LinkAuthenticationElement
          id="link-authentication-element"
          onChange={handleEmailChange}
        />
        <PaymentElement id="payment-element" options={paymentElementOptions} />

        {/* Label styles */}
        <style>
          {`
              label {
                color: white; // Set label text color to white
              }
            `}
        </style>

        <button
          disabled={isLoading || !stripe || !elements}
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "12px 24px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginTop: "20px",
          }}
          id="submit"
        >
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay now"
            )}
          </span>
        </button>
        {/* Show any error or success messages  */}
        {message && <div id="payment-message">{message}</div>}
      </form>
    </div>
  );
}
