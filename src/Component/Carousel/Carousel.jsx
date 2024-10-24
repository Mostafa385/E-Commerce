import React, { useState } from "react";
import "./Carousel.css";
import Card from "../HomeCard/Card";

function Carousel({ item }) {
  const [index, setIndex] = useState(0);
  const imagesPerSlide = 3;

  const inc = () =>
    setIndex((prevIndex) => (prevIndex + imagesPerSlide) % 6);
  const dec = () =>
    setIndex(
      (prevIndex) => (prevIndex - imagesPerSlide + 6) % 6
    );

  return (
    <div className="d-sm-block d-none px-4">
      <h1 className="text-center mt-5 ">New Released</h1>
      <div className="carousel-container mt-4 shadow-sm">
        <button
          onClick={dec}
          className="btn btn-primary"
          disabled={item.length === 0}
        >
          &lt;
        </button>

        <div className="carousel-images-container ">
          <div
            className="carousel-images"
            style={{
              transform: `translateX(-${index * (100 / imagesPerSlide)}%)`,
            }}
          >
            {item.map((product, i) => (
              <div className="image-container" key={i}>
                <img
                  className="img-fluid"
                  src={product.image}
                  alt={`product-${i}`}
                />
                <div className="product-title">{product.title}</div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={inc}
          className="btn btn-primary"
          disabled={item.length === 0}
        >
          &gt;
        </button>
      </div>
      <Card />
    </div>
  );
}

export default Carousel;
