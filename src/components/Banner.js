import "./banner.css";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../images/oplasslidereser.jpg";

function NoTransitionExample() {
  return (
    <div className="carousel_container">
      <Carousel
        width="100%"
        id="carousel"
        slide={true}
        indicators={true}
        style={{ marginTop: "1px", paddingRight: "5px", zIndex: "-1" }}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            alt="First slide"
            // width="100%"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            alt="Second slide"
            // width="100%"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            alt="Third slide"
            // width="100%"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default NoTransitionExample;
