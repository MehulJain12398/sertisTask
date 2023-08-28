import React from "react";
import { useAppContext } from "../context/AppContext";
import ActionButton from "./button/ActionButton";
import "../styles/Confirmation.css";
import EditButton from "./button/EditButton";

const ConfirmationPage = () => {
  const { formData, setCurrentPage,setIsEdit} = useAppContext();

  const handleEdit = () => {
    setCurrentPage("edit");
    setIsEdit(true)
  
  };

  const handleConfirm = () => {
    setCurrentPage("last");
  };

  const confirmFields = [
    { label: "First name", value: formData?.firstName },
    { label: "Last name", value: formData?.lastName },
    { label: "Email", value: formData?.email },
    {
      label: "Phone Number",
      value: `${formData?.countryCode} ${formData?.phoneNumber}`,
    },
  ];

  return (
    <div className="container">
    
      <div className="left_container">
      <div className="left_heading">
        <h4>Please Confirm <br /> Your Information</h4>
        </div>
      </div>
      <div className="right_container">
      <div className="section_form">
        <div className="headingContainer">
          <h5>Profile</h5>
          <EditButton onClick={handleEdit}/>
        </div>
        {confirmFields.map((field, index) => (
            <div key={index} className="confirm_box body1">
              <div>{field.label}</div>
              <div>{field.value}</div>
            </div>
          ))}
        <div className="button_right">
          <ActionButton onClick={handleConfirm} buttonName="Confirm"/>
        </div>
        </div>
      </div>

    </div>
  );
};

export default ConfirmationPage;
