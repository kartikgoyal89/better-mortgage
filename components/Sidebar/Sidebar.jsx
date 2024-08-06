import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

import "./sidebar.css";

const Sidebar = (props) => {
  const [isVisible, setIsVisible] = useState("closed");

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth <= 955);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        style={isVisible ? { display: "block" } : { display: "none" }}
        className={`sidebar-menu  ${props.menuNew} `}
      >
        <div className="sidebar-container">
          <div className="heading">
            <h2>Better</h2>
            <RxCross2 onClick={props.crossClicked} className="cross" />
          </div>
          <div className="list">
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Buy
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <ul>
                      <li>Apply Now</li>
                      <li>Purchase Rates</li>
                      <li>Affordablilty calculator</li>
                      <li>Mortgage Calculator</li>
                      <li>Rent VS buy Calculator</li>
                      <li>Find an agent</li>
                      <li>VA Loan</li>
                      <li>Learning center</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Refinance
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <ul>
                      <li>Apply Now</li>
                      <li>Refinance Rates</li>
                      <li>Cash-out refinance calculator</li>
                      <li>Learning center</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    HELOC
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <ul>
                      <li>Apply Now</li>
                      <li>Calculate your Cash 💵</li>
                      <li>HELOC vs. Cash-out Refinance</li>
                      <li>Learning Center</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    Rates
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <ul>
                      <li>Purchase mortgage rates</li>
                      <li>Refinance rates</li>
                      <li>Refinance cash-out rates</li>
                      <li>HELOC rates</li>
                      <li>Purchase VA rates</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive"
                  >
                    Better+
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <ul>
                      <li>Get Insurance</li>
                      <li>Title and Closing</li>
                      <li>Better Attorney Match</li>
                      <li>Learning Center</li>
                      <li>Better Agent Match</li>
                      <li>Better Duo</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center mt-2">
          <p className="mb-0">
            <FaPhone className="me-2" />
            Call us anytime at (415) 523 88371
          </p>
        </div>
        <div className="sidebar-btns d-flex flex-column align-items-center justify-content-center">
          <button className="start">
            <div>
              <strong>Get Started</strong>
              <p className="mb-0">3min | No credit impact</p>
            </div>
          </button>

          <button className="login">
            Sign in <FaRegUser />
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
