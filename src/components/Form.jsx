import React, { useState, useEffect } from "react";
import options from "../assets/countryCodes.json";
import useFormValidation from "../hooks/useFormValidation";
import "../styles/Form.css";
import InputText from "./InputField/InputText";
import InputSelect from "./InputField/InputSelect";
import ActionButton from "./button/ActionButton";
import { useAppContext } from "../context/AppContext";

const Form = () => {
  const { setCurrentPage, formData, setFormData } = useAppContext();
  const {
    formUpdatedData,
    formErrors,
    disableSubmit,
    handleInputChange,
    handleBlur,
  } = useFormValidation(formData, {
    firstName: {
      regex: /^[A-Za-z\s]+$/,
      errorMessage: "This field can only contain alphabets (A-z) and space.",
    },
    lastName: {
      regex: /^[A-Za-z\s]+$/,
      errorMessage: "This field can only contain alphabets (A-z) and space.",
    },
    email: {
      regex: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|io|co)$/,
      errorMessage: "This field has invalid email format (example@email.com).",
    },
    phoneNumber: {
      regex: /^[0-9]{1,16}$/,
      errorMessage: "Only digits are allowed",
      maxLengthErrorMessage:"The phone number is too long."
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (disableSubmit) {
      return;
    }
    setFormData(formUpdatedData);
    setCurrentPage("confirm");
  };

  return (
    <div className="container">
      <div className="left_container">
      <div className="left_heading">
        <h4>
          Enter Your Information To
        </h4>
        <h3>Get A Special Deal</h3>
        </div>
      </div>
      <div className="right_container">
        <div className="section_form">
          <h5>Profile</h5>
          <form onSubmit={handleSubmit}>
            <div className="first_grid">
              <InputText
                label="First name"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                value={formUpdatedData?.firstName}
                onChange={handleInputChange}
                errors={formErrors}
                onBlur={handleBlur}
              />
              <InputText
                label="Last name"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                value={formUpdatedData?.lastName}
                onChange={handleInputChange}
                errors={formErrors}
                onBlur={handleBlur}
              />
              <InputText
                label="Email"
                id="email"
                name="email"
                placeholder="Enter your Email"
                value={formUpdatedData?.email}
                onChange={handleInputChange}
                errors={formErrors}
                onBlur={handleBlur}
              />
            </div>

            <div className="second_grid">
            <div className="input_select">
              <InputSelect
                label="Country Code"
                name="countryCode"
                value={formUpdatedData?.countryCode}
                onChange={handleInputChange}
                options={options}
              />
              </div>
              <div className="input_text">
              <InputText
                label="Phone Number"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter your Phone Number"
                value={formUpdatedData?.phoneNumber}
                onChange={handleInputChange}
                onBlur={handleBlur}
                errors={formErrors}
              />
              </div>
            </div>
            <div className="button_right">
              <ActionButton
                type="submit"
                buttonName="next"
                disabled={disableSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
