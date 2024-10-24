import React from "react";
import "./Card.css";
import Truck from "../../assets/truck.svg";
import Shield from "../../assets/shield.svg";
import Customer from "../../assets/message-circle.svg";
import Award from "../../assets/award.svg";
import CardItem from "./CardItem"; 

function Card() {
  const cardData = [
    {
      image: Truck,
      title: "Free Shipping",
      text: "We provide reliable truck services for all your needs.",
    },
    {
      image: Shield,
      title: "Insurance Coverage",
      text: "Comprehensive insurance coverage for peace of mind.",

    },
    {
      image: Customer,
      title: "Customer Support",
      text: "Our team is here to help you with any questions.",

    },
    {
      image: Award,
      title: "Award Winning",
      text: "We are proud to be an award-winning company.",
    },
  ];

  return (
    <div className="d-flex flex-nowrap mt-3 gap-2">
      {cardData.map((card, index) => (
        <CardItem
          key={index}
          image={card.image}
          title={card.title}
          text={card.text}
        />
      ))}
    </div>
  );
}

export default Card;
