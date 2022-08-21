import React from "react";
import "../styles/profile.scss";
import InputComponent from "./inputComponents";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-inner">
        <div className="top-header">
          <p>Complete your Purchase</p>
        </div>
        <div className="stages-info">
          <span className="info current-stage">personal info</span>
          <span className="info">billing info</span>
          <span className="info">confirm payment</span>
        </div>
        <div className="horizontal-line"></div>
        <div className="horizontal-stage-indicator"></div>
        <br />
        <div className="form-container">
          <InputComponent
            label="Name"
            placeholder="Plase input your full name"
            type="text"
          />
          <InputComponent
            label="Email Address *"
            placeholder="Plase input your email"
            type="email"
          >
            <span className="email-redirect">
              The purchase reciept would be sent to this address
            </span>
          </InputComponent>
          <InputComponent
            label="Address 1"
            placeholder="Plase input your primary address"
            type="text"
          />
          <InputComponent
            label="Address 2"
            placeholder="Plase input your secondary address"
            type="text"
          />
          <div className="state-lga">
            <InputComponent label="Local Government" className="lga" />
            <InputComponent label="State" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
