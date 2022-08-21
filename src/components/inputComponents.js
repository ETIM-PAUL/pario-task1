import React from "react";
import "../styles/input.scss";
import { useField } from "formik";

export const InputComponent = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="input-container">
      <div className="label-children">
        <label>{props.label}</label>
        {children}
      </div>
      <input {...field} {...props} />
      {(meta.touched && meta.error) || (meta.error && meta.value === "") ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};
export const SelectComponent = ({ children, ...props }) => {
  const [field] = useField(props);

  return (
    <div className="input-container">
      <div className="label-children">
        <label>{props.label}</label>
      </div>
      <select {...field} {...props}>
        {children}
      </select>
    </div>
  );
};
export const Button = ({ children, ...props }) => {
  return (
    <div className="input-container">
      <button {...props}>{children}</button>
    </div>
  );
};
