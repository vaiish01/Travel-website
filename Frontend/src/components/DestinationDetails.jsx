// src/components/DestinationDetails.js
import React from "react";

const DestinationDetails = ({ details }) => {
  return (
    <div className="container my-5">
      <h2>{details.name}</h2>
      <img src={details.image} alt={details.name} className="img-fluid" />
      <p className="mt-3">{details.description}</p>
    </div>
  );
};

export default DestinationDetails;
