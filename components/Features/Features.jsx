import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa6";
import "./features.css";

const Features = () => {
  const [img, setImg] = useState(0);
  return (
    <section className="features">
      <div className="find-out">
        <div className="left">
          {img === 0 ? (
            <div className="img">
              <img
                src="https://media.better.com/better-com/homepage/social-proof/still-quote-Arian.webp"
                alt=""
              />
            </div>
          ) : img === 1 ? (
            <div className="img">
              <img
                src="	https://media.better.com/better-com/homepage/social-proof/still-quote-Amanda.webp"
                alt=""
              />
            </div>
          ) : (
            <div className="img">
              <img
                src="https://media.better.com/better-com/homepage/social-proof/still-quote-Paul.webp"
                alt=""
              />
            </div>
          )}

          <div className="buttons">
            <button
              className={`${img == 0 ? "active" : ""}`}
              onClick={() => setImg(0)}
            >
              Arian
            </button>
            <button
              className={`${img == 1 ? "active" : ""}`}
              onClick={() => setImg(1)}
            >
              Amanda
            </button>
            <button
              className={`${img == 2 ? "active" : ""}`}
              onClick={() => setImg(2)}
            >
              Paul
            </button>
          </div>
        </div>
        <div className="right">
          <h2>
            Find out why <br />
            we're better.
          </h2>
          <button>See all our stories</button>
          <div className="lower">
            <div className="star">
              <FaRegStar />
              <h5 className="mb-0">Trustpilot</h5>
            </div>
            <span>Excellent</span>
            <span>
              <strong>4.3 </strong>
              out of 5
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
