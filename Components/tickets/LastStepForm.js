import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Anchor from "../Anchor";

function LastStepForm({ responseID }) {
  const [showModal, setShowModal] = useState(false);
  const formik = useFormik({
    initialValues: {
      buyerFirstName: "",
      buyerLastName: "",
      buyerEmail: "",
      street: "",
      city: "",
      postcode: "",
    },
    validationSchema: Yup.object({
      buyerFirstName: Yup.string()
        .required("First Name is Required")
        .matches(
          /^[a-zA-Z]+$/,
          "First Name cannot contain special characters or spaces"
        ),
      buyerLastName: Yup.string()
        .required("Last Name is Required")
        .matches(
          /^[a-zA-Z]+$/,
          "Last Name cannot contain special characters or spaces"
        ),
      buyerEmail: Yup.string()
        .email("Invalid email address")
        .required("Email Address is required"),
      street: Yup.string().required("Street is Required"),
      city: Yup.string().required("City is Required"),
      postcode: Yup.string()
        .required("Postcode Required")
        .matches(/\d{4}$/, "Postcode must be 4 digits"),
      creditCard: Yup.string()
        .required("Credit Card Number Required")
        .matches(/\d{12}$/, "Credit Card must be 12 digits"),
      month: Yup.string()
        .required("Month Number Required")
        .matches(/0[1-9]|1[0-2]/, "Month number must be between 01 - 12"),
      year: Yup.string()
        .required("Year is Required")
        .matches(/(2)[2-9]|30/, "Year must be between 22-30"),
      cvv: Yup.string()
        .required("cvv is Required")
        .matches(/\d{4}$/, "cvv must only be only 4 digits"),
    }),

    onSubmit: (values) => {
      setShowModal(true);
      const options1 = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwZGhsbHJ4dGdsd2Z2eWFnZmR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA3Nzc1ODAsImV4cCI6MTk4NjM1MzU4MH0.eFsC2swBs_Ue_3gaotH8lxAyIwSiupUuuozfu5KDQuE",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwZGhsbHJ4dGdsd2Z2eWFnZmR1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3MDc3NzU4MCwiZXhwIjoxOTg2MzUzNTgwfQ.NWTxNAJ4BLntV1L3RyBdAZ1ogSVnfujKVZ_Y3ErXv4c",
          Prefer: "return=representation",
        },
        body: `{
          "buyerFirstName": ${JSON.stringify(values.buyerFirstName)},
          "buyerLastName": ${JSON.stringify(values.buyerLastName)},
          "buyerEmail": ${JSON.stringify(values.buyerEmail)},
          "street": ${JSON.stringify(values.street)},
          "city": ${JSON.stringify(values.city)},
          "postcode": ${JSON.stringify(values.postcode)}
        }`,
      };

      fetch(
        "https://ypdhllrxtglwfvyagfdu.supabase.co/rest/v1/customerinfo",
        options1
      )
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err));

      const options2 = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: `{"id":${responseID}}`,
      };

      fetch("https://touchgrassfestival.fly.dev/fullfill-reservation", options2)
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err));
    },
  });

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="input-wrapper green-border"
      >
        <div className="personal-info">
          <h5>Personal Information</h5>
          <div className="input-container">
            <input
              id="buyerFirstName"
              name="buyerFirstName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.buyerFirstName}
              required
            />
            <label htmlFor="buyerFirstName">First Name:</label>
            {formik.touched.buyerFirstName && formik.errors.buyerFirstName ? (
              <p className="error">{formik.errors.buyerFirstName}</p>
            ) : null}
          </div>
          <div className="input-container">
            <input
              id="buyerLastName"
              name="buyerLastName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.buyerLastName}
              required
            />
            <label htmlFor="buyerLastName">Last Name:</label>
            {formik.touched.buyerLastName && formik.errors.buyerLastName ? (
              <p className="error">{formik.errors.buyerLastName}</p>
            ) : null}
          </div>

          <div className="input-container">
            <input
              id="buyerEmail"
              name="buyerEmail"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.buyerEmail}
              required
            />
            <label htmlFor="buyerEmail">Email:</label>
            {formik.touched.buyerEmail && formik.errors.buyerEmail ? (
              <p className="error">{formik.errors.buyerEmail}</p>
            ) : null}
          </div>
          <div className="input-container">
            <input
              id="street"
              name="street"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.street}
              required
            />
            <label htmlFor="street">Street Name:</label>
            {formik.touched.street && formik.errors.street ? (
              <p className="error">{formik.errors.street}</p>
            ) : null}
          </div>

          <div className="input-container">
            <input
              id="city"
              name="city"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
              required
            />
            <label htmlFor="city">City:</label>
            {formik.touched.city && formik.errors.city ? (
              <p className="error">{formik.errors.city}</p>
            ) : null}
          </div>

          <div className="input-container">
            <input
              id="postcode"
              name="postcode"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.postcode}
              maxLength={4}
              required
            />
            <label htmlFor="postcode">Postcode:</label>
            {formik.touched.postcode && formik.errors.postcode ? (
              <p className="error">{formik.errors.postcode}</p>
            ) : null}
          </div>
        </div>

        <div className="payment-info">
          <h5>Payment Information</h5>
          <div className="input-container">
            <input
              className="credit-card"
              id="creditCard"
              name="creditCard"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              maxLength={12}
              required
            />
            <label htmlFor="creditCard">Credit Card Number:</label>
            {formik.touched.creditCard && formik.errors.creditCard ? (
              <p className="error">{formik.errors.creditCard}</p>
            ) : null}
          </div>

          <div className="input-container">
            <input
              className="month"
              id="month"
              name="month"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              maxLength={2}
              required
            />
            <label htmlFor="month">Month</label>
            {formik.touched.month && formik.errors.month ? (
              <p className="error">{formik.errors.month}</p>
            ) : null}
          </div>

          <div className="input-container">
            <input
              className="year"
              id="year"
              name="year"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              maxLength={2}
              required
            />
            <label htmlFor="year">Year ending digits:</label>
            {formik.touched.year && formik.errors.year ? (
              <p className="error">{formik.errors.year}</p>
            ) : null}
          </div>

          <div className="input-container">
            <input
              className="cvv"
              id="cvv"
              name="cvv"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              maxLength={4}
              required
            />
            <label htmlFor="cvv">cvv:</label>
            {formik.touched.cvv && formik.errors.cvv ? (
              <p className="error">{formik.errors.cvv}</p>
            ) : null}
          </div>
        </div>
        <div className={`modal ${showModal ? " modal-show" : " "}`}>
          <div className="modal-content">
            <h3>Thank you for your order!</h3>
            <ul>
              <li>Your order number: {responseID} has been confirmed.</li>
              <li>Happy Partying!</li>
            </ul>
            <div className="back-front">
              <Anchor href="/">Home</Anchor>
            </div>
          </div>
        </div>
        <button type="submit">Buy</button>
      </form>
    </>
  );
}

export default LastStepForm;
