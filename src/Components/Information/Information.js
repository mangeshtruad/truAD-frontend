import React from "react";
import "./Information.css";

const Information = () => {
  return (
    <div className="information-box">
      <p>Info</p>
      <div className="information-divider"></div>
      {/* Add more information items here */}
      <div className="informations">
        <div className="information">
          <h6>Update 1.12</h6>
          <p>Update 1.12 will be launched soon</p>
        </div>
        <div className="information">
          <h6>Tickets</h6>
          <p>New Ticketing section to be launched</p>
        </div>
      </div>
    </div>
  );
};

export default Information;
