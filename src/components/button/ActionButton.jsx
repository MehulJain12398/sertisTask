import React from "react";

const ActionButton = ({onClick=() => {},buttonName,type="",disabled=false}) => {

  return (
    <div className="button-container">
      <button type={type} disabled={disabled} className={disabled ? "disable_button" : "confirm"} onClick={onClick}>
        {buttonName}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.2929 5.63599L16.6669 11.01L4.92893 11.01C4.36325 11.01 3.93898 11.4343 3.93898 11.9999C3.93898 12.5656 4.36325 12.9899 4.92893 12.9899L16.6669 12.9899L11.2929 18.3639C10.8686 18.7882 10.8686 19.3539 11.2929 19.7781C11.7172 20.2024 12.2828 20.2024 12.7071 19.7781L19.7782 12.7071C19.8489 12.6363 19.9903 12.4949 19.9903 12.3535C20.061 12.1414 20.061 11.8585 19.9903 11.6464C19.9903 11.505 19.8489 11.3636 19.7782 11.2928L12.7071 4.22177C12.2828 3.79751 11.7172 3.79751 11.2929 4.22177C10.8686 4.64604 10.8686 5.21172 11.2929 5.63599Z"
            fill="#3A3F4A"
          />
        </svg>
      </button>
    </div>
  );
};

export default ActionButton;
