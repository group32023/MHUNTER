import React, { useState, useEffect } from "react";
import axios from "axios";

function TestButton() {
  const artistId = 27;
  const [paymentData, setPaymentData] = useState([]);
  const [selectedRefund, setSelectedRefund] = useState(null);

  useEffect(() => {
    const fetchPaymentData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/payment-details/by-artist/${artistId}`
        );
        const fetchedData = response.data;
        setPaymentData(fetchedData);
      } catch (error) {
        console.error("Error fetching payment data:", error);
      }
    };
    fetchPaymentData();
  }, []);

  const handleSubmit = () => {
    // Your submit logic here
  };
  const handleButtonClick = (specificPayment) => {
    setSelectedRefund(specificPayment);
    const refundAmount = specificPayment.amount/10; //you can assign what percentage want to refund in total amount(10%)
    axios
      .post("http://localhost:8080/create-refund", {
        paymentIntent: specificPayment.paymentIntent,
        amount: refundAmount,
        tot_amount: specificPayment.amount,
      })
      .then((response) => {
        console.log("Response from refund:", response.data);
      })
      .catch((error) => {
        // Handle error here
        console.error("Error creating Refund Payment :", error);
      });
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center items horizontally
    justifyContent: "center", // Center items vertically
    height: "100vh", // Makes the container take up the full viewport height
  };

  const buttonStyle = {
    backgroundColor: "red", // Red color
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
    marginBottom: "10px",
  };

  return (
    <div style={containerStyle}>
      <div>{console.log("payment Data", paymentData)}</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {paymentData
          .filter((payment) => !payment._refunded) // Filter out items with _refunded set to true
          .map((payment) => (
            <button
              key={payment.orgId} // Assuming orgId is the unique identifier
              style={buttonStyle}
              onClick={() => {
                const confirmation = window.confirm(
                  `Are you sure you want to refund ${payment.payee_name} (${payment.orgId})?`
                );

                if (confirmation) {
                  handleButtonClick(payment);
                }
              }}
            >
              Refund {payment.payee_name} ({payment.orgId})
            </button>
          ))}
      </div>
      <div>
        {selectedRefund !== null && (
          <div>
           <h2 style={{ color: "white" }}>
  Your payment has been refunded to {selectedRefund.payee_name}, and
  the amount should now be in organizer account.
</h2>

            {/* Display payment data for the selected organization */}
            {paymentData
              .filter((payment) => payment.orgId === selectedRefund.orgId)
              .map((payment) => (
                <div key={payment.id}>
                  {/* Display relevant payment data here */}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TestButton;
