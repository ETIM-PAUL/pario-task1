import React, { useState } from "react";
import "../styles/profile.scss";
import { InputComponent, SelectComponent, Button } from "./inputComponents";
import { statesLGA } from "../utils/statesLGA";
import Heading from "./heading";
import { Formik, Form } from "formik";
import { yupValidation } from "../utils/utils";

const Profile = () => {
  const [selectedState, setSelectedState] = useState("");
  return (
    <div className="profile-container">
      <div className="profile-inner">
        <Heading />
        <br />
        <div className="form-container">
          <Formik
            enableReinitialize={true}
            // disabled={!Formik.isValid}
            initialValues={{
              name: "",
              email: "",
              address1: "",
              address2: "",
              state: "",
              lga: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting();
                console.log(values);
                console.log("values");
              }, 500);
            }}
            validationSchema={yupValidation}
          >
            <Form>
              <InputComponent
                label="Name"
                placeholder="Plase input your full name"
                type="text"
                name="name"
              />
              <InputComponent
                label="Email Address *"
                placeholder="Plase input your email"
                type="email"
                required={true}
                name="email"
              >
                <span className="email-redirect">
                  The purchase reciept would be sent to this address
                </span>
              </InputComponent>
              <InputComponent
                label="Address 1"
                name="address1"
                placeholder="Plase input your primary address"
                type="text"
              />
              <InputComponent
                label="Address 2"
                name="address2"
                placeholder="Plase input your secondary address"
                type="text"
              />
              <div className="state-lga">
                <SelectComponent
                  label="Local Government"
                  className="lga"
                  name="lga"
                >
                  {selectedState.length > 0 &&
                    statesLGA[selectedState].map((lga, id) => {
                      return <option key={id}>{lga}</option>;
                    })}
                </SelectComponent>

                <SelectComponent
                  label="State"
                  className="state"
                  name="state"
                  value={selectedState}
                  onChange={(e) => {
                    setSelectedState(e.target.value);
                  }}
                >
                  <option disabled>Plase select your state</option>
                  {Object.keys(statesLGA).map((state, id) => {
                    return <option key={id}>{state}</option>;
                  })}
                </SelectComponent>
              </div>
              <div className="btn-flex">
                <Button type="submit" className="next-btn btn">
                  <span className="btn-value">Next</span>
                </Button>
                <Button className="cancel-btn btn">
                  <span className="btn-value btn">Cancel Payment</span>
                </Button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Profile;
