import React from "react";
import "../../styles/Button.css"; // Import your CSS file

const EditButton = ({onClick}) => {
  return (
    <div className="button-container">
      <div className="editIcon" onClick={onClick}>
      <svg className="editSVG" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5667 13.7666L18.3167 11.5333L19.2 10.6666C19.3889 10.4777 19.6251 10.3833 19.9087 10.3833C20.1918 10.3833 20.4278 10.4777 20.6167 10.6666L21.4333 11.4833C21.6222 11.6833 21.7222 11.9193 21.7333 12.1913C21.7445 12.4637 21.65 12.6944 21.45 12.8833L20.5667 13.7666ZM11.0333 21.6666C10.8667 21.6666 10.7251 21.6084 10.6087 21.492C10.4918 21.3751 10.4333 21.2333 10.4333 21.0666V19.6666C10.4333 19.5889 10.4473 19.514 10.4753 19.442C10.5029 19.3695 10.55 19.3 10.6167 19.2333L17.6 12.25L19.85 14.5L12.8667 21.4833C12.8 21.55 12.7307 21.5973 12.6587 21.6253C12.5862 21.6529 12.5111 21.6666 12.4333 21.6666H11.0333Z" fill="#1B1D22"/>
<rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#1B1D22"/>
</svg>

        </div>
    </div>
  );
};

export default EditButton;
