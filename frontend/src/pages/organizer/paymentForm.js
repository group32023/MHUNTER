import React from "react";
import { useRef, useState, useEffect } from "react";
import { useParams,  useNavigate } from "react-router-dom";
import axios from "axios";
import "../../assets/css/paymentform.css";

function Payment() {
  const formRef = useRef(null);

  const resetFormFields = () => {
    setFullName("");
    setPaymentType("");
    setAmount(0);
  };

  const [fullName, setFullName] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [amount, setAmount] = useState(0);
  const [formPaymentType, setFormPaymentType] = useState("");
  const [organizerId, setOrganizerId] = useState("");
  const [invoiceId, setInvoiceId] = useState("");

  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const regDate = `${year}-${month}-${day}`;

  const save = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("paymenttype", paymentType);
    formData.append("amount", amount);
  };

  const { artistId } = useParams();
  const [invoiceData, setInvoiceData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInvoiceData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/invoice/by-artist/${artistId}`
        );
        const fetchedData = response.data;

        // Assuming the response data has properties like invoiceNumber, amount, dueDate
        const sampleInvoiceData = {
          artistId: fetchedData[0].artist_id,
          totalAmount: fetchedData[0].totalAmount,
          paymentType: fetchedData[0].paymentType,
          organizerId: fetchedData[0].org_Id,
          invoiceId: fetchedData[0].invoiceId,
        };

        setInvoiceData(sampleInvoiceData);
        setPaymentType(sampleInvoiceData.paymentType);
        setFormPaymentType(sampleInvoiceData.paymentType);
        setAmount(sampleInvoiceData.totalAmount);
        setOrganizerId(sampleInvoiceData.organizerId);
        setInvoiceId(sampleInvoiceData.invoiceId);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching invoice data:", error);
        setIsLoading(false);
      }
    };
    fetchInvoiceData();
  }, [artistId]);

  useEffect(() => {
    setAmount(amount);
    console.log(amount);
  }, [amount]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="login template d-flex justify-content-center align-items-center vh-100 bgimage">
          <form
            ref={formRef}
            onSubmit={save}
            className="paymentform_container"
            enctype="multipart/form-data"
          >
            <div className="paymentform_left-box">
              <div className="paymentform_-text">
                <h4>
                  <b>Add your details here .</b>
                </h4>
              </div>
              <div className="mb-2 text-white paymentform_text-field">
                <div style={{ padding: "5px" }}>
                  <label htmlFor="FullName">Full Name</label>
                  <input
                    type="text"
                    placeholder=""
                    className="form-control"
                    required
                    value={fullName}
                    onChange={(event) => {
                      setFullName(event.target.value);
                    }}
                  />
                </div>
              </div>

              <div
                className="mb-2 text-white paymentform_text-field-new select"
                style={{ display: "flex" }}
              >
                <div style={{ padding: "5px" }}>
                  <label htmlFor="paymenttype">Payment Type</label>
                  <select
                    id="paymentType"
                    className="form-control"
                    required
                    value={paymentType}
                    onChange={(event) => {
                      setPaymentType(event.target.value);
                    }}
                  >
                    {formPaymentType === "Advanced" && (
                      <option value="Advanced">Advanced Payment</option>
                    )}
                    <option value="Full">Full Payment</option>
                  </select>
                </div>
                <div className="mb-2 text-white paymentform_text-field">
                  <div style={{ padding: "5px" }}>
                    <label htmlFor="Amount">Amount</label>
                    <input
                      type="number"
                      placeholder=""
                      className="form-control"
                      required
                      value={
                        paymentType === "Advanced" ? (amount * 3) / 10 : amount
                      }
                      onChange={(event) => {
                        setAmount(event.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div
                className="payment-button"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <button
                  type="submit"
                  onClick={() =>
                    navigate("/organizer/paymentForm/stripePayment", {
                      state: {
                        amount:
                          paymentType === "Advanced"
                            ? (amount * 3) / 10
                            : amount,
                        paymentType: paymentType,
                        organizerId: organizerId,
                        artistId: artistId,
                        payeeName:fullName,
                        invoiceId: invoiceId,
                      },
                    })
                  }
                >
                  Submit Payment
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Payment;
