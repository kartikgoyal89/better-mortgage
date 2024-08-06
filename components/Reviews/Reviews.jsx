import React, { useState } from "react";
import "./reviews.css";
import { FaArrowRightLong } from "react-icons/fa6";

const Reviews = () => {
  const [box, setBox] = useState(0);
  return (
    <section className="reviews">
      <div className="heading">
        <div className="left">
          <h1>Got Questions?</h1>
          <h1>We've got answers</h1>
        </div>
        <div className="right">
          <div className="buttons">
            <button
              className={`${box == 0 ? "active" : ""}`}
              onClick={() => setBox(0)}
            >
              Our Products
            </button>
            <button
              className={`${box == 1 ? "active" : ""}`}
              onClick={() => setBox(1)}
            >
              Calculations
            </button>
            <button
              className={`${box == 2 ? "active" : ""}`}
              onClick={() => setBox(2)}
            >
              Guides & FAQs
            </button>
          </div>
        </div>
      </div>
      {box === 0 ? (
        <div className="boxes">
          <div className="box box-1">
            <h4>
              Buying your first home <br />
              with Better
            </h4>
            <button className="arrow">
              <FaArrowRightLong />
            </button>
            <div className="img">
              <img
                src="	https://media.better.com/better-com/homepage/learning-center/first-home.webp"
                alt=""
              />
            </div>
          </div>
          <div className="box box-2">
            <div className="left">
              <h4>One day Mortgage</h4>
              <p>
                Kick your home loan into hyperdrive. Going from locked rate to
                Commitment Letter takes weeks for traditional lenders. We do it
                in a single day. Traditional lenders deliver a Commitment Letter
                in a few weeks.
              </p>
              <button className="arrow">
                <FaArrowRightLong />
              </button>
            </div>
            <div className="right">
              <img
                src="https://media.better.com/better-com/homepage/learning-center/one-day-mortgage.webp"
                alt=""
              />
            </div>
          </div>
          <div className="box box-3">
            <div className="left">
              <img
                src="https://media.better.com/better-com/homepage/learning-center/better-heloc.webp"
                alt=""
              />
            </div>
            <div className="right">
              <h3>Better HELOC</h3>
              <p>
                Introducing One Day HELOC™—your express lane to getting cash
                from your home with our Home Equity Line of Credit
              </p>
              <button className="arrow">
                <FaArrowRightLong />
              </button>
            </div>
          </div>
          <div className="box box-4">
            <h3>Insurance</h3>
            <div className="box-arrow">
              <button className="arrow">
                <FaArrowRightLong />
              </button>
            </div>
            <div className="img">
              <img
                src="	https://media.better.com/better-com/homepage/learning-center/insurance.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      ) : box === 1 ? (
        <div className="boxes">
          <div className="box box-1">
            <h4>Mortgage Calculator</h4>
            <button className="arrow">
              <FaArrowRightLong />
            </button>
            <div className="img">
              <img
                src="https://media.better.com/better-com/homepage/learning-center/mortgage-calculator.webp"
                alt=""
              />
            </div>
          </div>
          <div className="box box-2">
            <div className="left">
              <h4>Affordability Calculator</h4>
              <p>
                Got homeownership dreams? Let's put some numbers behind them.
                Our affordability calculator estimates the maximum home you can
                afford.
              </p>
              <button className="arrow">
                <FaArrowRightLong />
              </button>
            </div>
            <div className="right">
              <img
                src="	https://media.better.com/better-com/homepage/learning-center/affordability-calculator.webp"
                alt=""
              />
            </div>
          </div>
          <div className="box box-3">
            <div className="left">
              <img
                src="https://media.better.com/better-com/homepage/learning-center/heloc-calculator.webp"
                alt=""
              />
            </div>
            <div className="right">
              <h3>HELOC Calcuator</h3>
              <p>
                Need cash? Quickly see how much equity you can borrow from your
                home and what your monthly payments might be.
              </p>
              <button className="arrow">
                <FaArrowRightLong />
              </button>
            </div>
          </div>
          <div className="box box-4">
            <h3>Fixed-rate loan comparision</h3>
            <div className="box-arrow">
              <button className="arrow">
                <FaArrowRightLong />
              </button>
            </div>
            <div className="img">
              <img
                src="https://media.better.com/better-com/homepage/learning-center/fixed-rate-calculator.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="boxes">
          <div className="box box-1">
            <h4>
              What is a good debt-to-
              <br />
              income ratio for a home
              <br />
              loan?
            </h4>
            <button className="arrow">
              <FaArrowRightLong />
            </button>
            <div className="img">
              <img
                src="https://media.better.com/better-com/homepage/learning-center/good-dti.webp"
                alt=""
              />
            </div>
          </div>
          <div className="box box-2">
            <div className="left">
              <h4>Buying a house without realtor</h4>
              <p>
                Thinking about buying a house without a real estate agent? Read
                this first.
              </p>
              <button className="arrow">
                <FaArrowRightLong />
              </button>
            </div>
            <div className="right house">
              <img
                src="https://media.better.com/better-com/homepage/learning-center/buy-house-without-realtor.webp"
                alt=""
              />
            </div>
          </div>
          <div className="box box-3">
            <div className="left house">
              <img
                src="https://media.better.com/better-com/homepage/learning-center/loan-timeline.webp"
                alt=""
              />
            </div>
            <div className="right">
              <h3>Timeline for homebuying process</h3>
              <p>
                Does the process of buying a home seem daunting? Don't stress,
                we broke it down into 8 easy steps.
              </p>
              <button className="arrow">
                <FaArrowRightLong />
              </button>
            </div>
          </div>
          <div className="box box-4">
            <h3>Conventional loan requirements</h3>
            <div className="box-arrow">
              <button className="arrow">
                <FaArrowRightLong />
              </button>
            </div>
            <div className="img">
              <img
                src="https://media.better.com/better-com/homepage/learning-center/conventional-loan.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Reviews;
