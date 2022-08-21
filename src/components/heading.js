import React from "react";

const Heading = () => {
  let current = "personal info";
  const steps = ["personal info", "billing info", "confirm payment"];
  return (
    <div>
      <div className="top-header">
        <p>Complete your Purchase</p>
      </div>
      <div className="stages-info">
        {steps.map((step, id) => {
          return (
            <span
              className={current === step ? "current-stage" : null}
              key={id}
            >
              {step}
              {current === step && (
                <div className="horizontal-stage-indicator"></div>
              )}
            </span>
          );
        })}
      </div>
      <div className="horizontal-line"></div>
    </div>
  );
};

export default Heading;
