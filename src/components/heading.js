import React from "react";

const Heading = () => {
  return (
    <div>
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
    </div>
  );
};

export default Heading;
