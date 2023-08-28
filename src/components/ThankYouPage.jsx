import React from "react";
import "../styles/Display.css";
import { useAppContext } from "../context/AppContext";
import CheckIcon from "../assets/Ellipse.svg"


const ThankYouPage = () => {
  const {formData:{firstName,email} } = useAppContext()
  return (
    <div className="display">
      <div className="display__headings">
      <img src={CheckIcon} loading="lazy" alt="check_icon" />
        <h4>Thank You</h4>
        <h4>{firstName}</h4>
        <p className="body1">
        Our special deal has been sent to {email}.
        </p>
        <p className="body1">
        if you have not received, please contact us.
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;
