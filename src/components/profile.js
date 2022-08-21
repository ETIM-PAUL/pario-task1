import React, { useState } from "react";
import "../styles/profile.scss";
import { InputComponent, SelectComponent } from "./inputComponents";
import { statesLGA } from "../utils/statesLGA";

const Profile = () => {
  const [selectedState, setSelectedState] = useState("");
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
            required={true}
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
            <SelectComponent label="Local Government" className="lga">
              {selectedState.length > 0 &&
                statesLGA[selectedState].map((lga, id) => {
                  return <option key={id}>{lga}</option>;
                })}
            </SelectComponent>

            <SelectComponent
              label="State"
              className="state"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
            >
              <option disabled>Plase select your state</option>
              {Object.keys(statesLGA).map((state, id) => {
                return <option key={id}>{state}</option>;
              })}
            </SelectComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
