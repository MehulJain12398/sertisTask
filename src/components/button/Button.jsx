import React from "react";
// import { ReactComponent as IconSvg } from "../../assets/Icon Button.svg";
import "../../styles/Button.css"; // Import your CSS file

const Button = ({onClick,rotate=false}) => {
  return (
    <div className={rotate ? "button-container button_rotate" : "button-container"}>
      <div className="icon" onClick={onClick}>
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.2929 17.6361L28.6669 23.0101L16.9289 23.0101C16.3632 23.0101 15.939 23.4344 15.939 24.0001C15.939 24.5658 16.3632 24.99 16.9289 24.99L28.6669 24.99L23.2929 30.364C22.8686 30.7883 22.8686 31.354 23.2929 31.7782C23.7172 32.2025 24.2828 32.2025 24.7071 31.7782L31.7782 24.7072C31.8489 24.6365 31.9903 24.495 31.9903 24.3536C32.061 24.1415 32.061 23.8586 31.9903 23.6465C31.9903 23.5051 31.8489 23.3637 31.7782 23.293L24.7071 16.2219C24.2828 15.7976 23.7172 15.7976 23.2929 16.2219C22.8686 16.6462 22.8686 17.2118 23.2929 17.6361Z"
            fill="white"
          />
          <rect
            x="0.5"
            y="0.5"
            width="47"
            height="47"
            rx="23.5"
            stroke="white"
          />
        </svg>
        </div>
    </div>
  );
};

export default Button;
