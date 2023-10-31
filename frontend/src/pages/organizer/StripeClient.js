import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";

import StripePaymentForm from "./StripePaymentForm";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51NhFvIJUlgmxbd49bNKEoR9k8ePDIYZFQBX9hENA0QwkeXyB9eaGlVVdytw165IRwaeNLvGpdXxSBezYLIQHbrbg00dM6shbZc"
);

const StripeClient = () => {
  const [clientSecret, setClientSecret] = useState("");
  const { state } = useLocation();

  useEffect(() => {
    // Create Payment Intent as soon as the page loads
    axios
      .post("http://localhost:8080/create-payment-intent", {
        amount: state.amount, // Replace with your desired amount
        email: "emailAddress@gmail.com",
        productName: "Artists", // Replace with your product name
        paymentType: state.paymentType,
        artist_id: state.artistId,
        orgId: state.organizerId,
        payee_name: state.payeeName,
      })
      .then((response) => {
        if (response.data && response.data.clientSecret) {
          setClientSecret(response.data.clientSecret);
        } else {
          console.error("Invalid response from server:", response.data);
        }
      })
      .catch((error) => {
        // Handle error here
        console.error("Error creating Payment Intent:", error);
      });
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <StripePaymentForm
            amount={state.amount}
            paymentType={state.paymentType}
            artist_id={state.artistId}
            orgId={state.organizerId}
            payee_name={state.payeeName}
            invoiceId={state.invoiceId}
          />
        </Elements>
      )}
    </div>
  );
};

export default StripeClient;
