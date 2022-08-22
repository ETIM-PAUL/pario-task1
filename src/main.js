import React from "react";
import Billing from "./components/billing";
import ConfirmPayment from "./components/confirmPayment";
import Heading, { steps } from "./components/heading";
import Profile from "./components/profile";
import { useForm } from "./context/FormContext";

const MainComponent = () => {
  const { state } = useForm();
  const { currentStep } = state;
  return (
    <div className="component-container">
      <div className="component-inner">
        <Heading />
        <br />
        {currentStep === steps[0] && <Profile />}
        {currentStep === steps[1] && <Billing />}
        {currentStep === steps[2] && <ConfirmPayment />}
      </div>
    </div>
  );
};

export default MainComponent;
