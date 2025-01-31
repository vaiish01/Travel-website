// src/components/DestinationCard.js
import React from "react";

const DestinationCard = ({ image, name, description, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
