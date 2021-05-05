import React from "react";

import "./custom-button.style.scss";

const CustomButton = ({ children, isGoogleSign, inverted, ...otherProps }) => (
  <button
    className={`${isGoogleSign ? "google-sign-in" : ""} ${inverted ? "inverted" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
