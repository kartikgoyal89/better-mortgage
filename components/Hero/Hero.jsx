import React from "react";
import "./hero.css";
import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaStarHalfAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">
      <div className="heading">
        <h1>
          Mortgages <br />
          made simple
        </h1>
      </div>
      <div className="img-container">
        <img
          src="https://media.better.com/better-com/homepage/hero-variant-c.webp"
          alt="Hero"
        />
      </div>
      <div className="buttons">
        <div className="left">
          <button className="btn">Start my approval</button>
          <p>3 min | No credit impact</p>
        </div>
        <div className="right">
          <div className="rating">
            <FcGoogle className="me-2 google" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStarHalfAlt className="star" />
          </div>
          <p>4.6 Stars | 3177 Google reviews</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
