import React from "react";
import "../styles/input.scss";
const InputComponent = ({ children, ...props }) => {
  return (
    <div className="input-container">
      <div className="label-children">
        <label>{props.label}</label>
        {children}
      </div>
      <input {...props} />
    </div>
  );
};

export default InputComponent;
