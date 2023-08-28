import React from "react";
import options from "../assets/countryCodes.json";
import "../styles/Form.css";
import { useAppContext } from "../context/AppContext";
import InputText from "./InputField/InputText";
import InputSelect from "./InputField/InputSelect";
import ActionButton from "./button/ActionButton";
import useFormValidation from "../hooks/useFormValidation";

const EditForm = () => {
  const { setCurrentPage, formData, setFormData, isEdit, setIsEdit } = useAppContext();
  const {
    formUpdatedData,
    formErrors,
    disableSubmit,
    handleInputChange,
    handleBlur,
  } = useFormValidation(formData, {
    firstName: {
      regex: /^[A-Za-z\s]+$/,
      errorMessage: "Only alphabets and space",
    },
    lastName: {
      regex: /^[A-Za-z\s]+$/,
      errorMessage: "Only alphabets and space",
    },
    email: {
      regex: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      errorMessage: "Invalid Email",
    },
    phoneNumber: {
      regex: /^[0-9]{1,16}$/,
      errorMessage: "Only numbers",
    },
  }, isEdit, setIsEdit);

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
            Edit Your <br /> Information
          </h4>
        </div>
      </div>
      <div className="right_container">
        <div className="section_form">
          <form onSubmit={handleSubmit}>
          <div className="headingContainer">
            <h5>Profile</h5>
            </div>
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
            <div className="wrapperButtonEdit">
              <ActionButton
                buttonName="cancel"
                onClick={() => setCurrentPage("confirm")}
              />
              <ActionButton
                type="submit"
                buttonName="next"
                disabled={disableSubmit || isEdit}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
