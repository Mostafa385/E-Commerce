import React from "react";
import "./Card.css";

function CardItem({ image, title, text }) {
  return (
    <>
      <div className="card-h w-25 d-flex align-items-baseline shadow p-3 mb-5 rounded mb-4">
        <div className="me-4">
          <img src={image} alt={title} />
        </div>
        <div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}

export default CardItem;
