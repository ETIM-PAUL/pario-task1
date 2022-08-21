import React from "react";
import "../styles/input.scss";
export const InputComponent = ({ children, ...props }) => {
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
export const SelectComponent = ({ children, ...props }) => {
  return (
    <div className="input-container">
      <div className="label-children">
        <label>{props.label}</label>
      </div>
      <select {...props}>{children}</select>
    </div>
  );
};
