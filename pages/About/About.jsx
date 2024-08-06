import React from "react";
import { MdPhone } from "react-icons/md";
import { TbDiscount } from "react-icons/tb";
import { MdOutlineTabletMac } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Meta from "../../components/Meta/Meta";

import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <Meta title={"About Us"} />
      <Header />
      <div className="heading about-heading">
        <h3>Our mission</h3>
        <h2>
          We’re making homeownership simpler, faster — <br />
          and most importantly, more accessible for all <br />
          Americans.
        </h2>
      </div>

      <div className="about-hero">
        <div className="left">
          <h4>The status quo is broken</h4>
          <p>
            The traditional processes around homeownership are opaque and
            stressful. Fees aren’t transparent and some are simply outrageous in
            size. Traditional mortgage lending is rife with unnecessary fees and
            slow, painful processes. It’s a system set up to benefit insiders —
            not you. Better.com CEO, Vishal Garg, set out to change that.
          </p>
          <button>Read Vishal's Story</button>
        </div>
        <div className="right">
          <div className="about-img-container">
            <img
              src="https://media.better.com/video/vishal-mission.jpg"
              alt=""
            />
          </div>
          <div className="play">
            <img src="/play.svg" alt="" />
          </div>
        </div>
      </div>

      <div className="change">
        <h3>How we’re changing things</h3>
        <p>
          Homeownership is a huge part of our economy. Housing overall is a $33
          trillion business, and mortgages account for $15 trillion. Yet home
          finance operates in the same way it has for decades — through opaque
          systems and expensive intermediaries whose interests are misaligned
          with consumers’.
        </p>
        <p>
          That’s why Better.com is redefining the homeownership process from the
          ground up. We’re using technology to make it faster and more
          efficient, and humans to help make it friendly and enjoyable.
        </p>
      </div>

      <div className="company">
        <h4>Backed By</h4>
        <div className="logos">
          <ul>
            <li>
              <img src="../../public/softBank.svg" alt="" />
            </li>
            <li>
              <img src="../../public/ally.svg" alt="" />
            </li>
            <li>
              <img src="../../public/citi.svg" alt="" />
            </li>
            <li>
              <img src="../../public/ping.svg" alt="" />
            </li>
            <li>
              <img src="../../public/gold.svg" alt="" />
            </li>
            <li>
              <img src="../../public/kpcb.svg" alt="" />
            </li>
            <li>
              <img src="../../public/american.svg" alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center company-container">
        <h3 className="company-time-head">Company timeline</h3>
      </div>
      <div className="company-tags">
        <div className="container left">
          <div className="txt">
            <h3>2014</h3>
          </div>
          <div className="text-box">
            <p>
              After Vishal Garg’s first attempt to purchase his own dream home,
              he quickly realized that the homebuying process is unnecessarily
              broken. This inspired him to found a technology-first company led
              by engineers and data experts with the mission of digitizing and
              automating home finance to make it cheaper, easier, and faster for
              all.
            </p>
          </div>
        </div>

        <div className="container right">
          <div className="txt">
            <h3>2015</h3>
          </div>

          <div className="text-box">
            <p>
              Better Mortgage funds its first mortgage loan entirely online
              (without a single phone call!).
            </p>
          </div>
        </div>
        <div className="container left">
          <div className="txt">
            <h3>2016</h3>
          </div>

          <div className="text-box">
            <p>
              Better Mortgage becomes a Fannie Mae approved seller + servicer
              and establishes relationships with top mortgage investors.
            </p>
          </div>
        </div>
        <div className="container right">
          <div className="txt">
            <h3>2017</h3>
          </div>
          <div className="text-box">
            <p>
              Better expands into the real estate market with Better Real
              Estate.
            </p>
          </div>
        </div>

        <div className="container left">
          <div className="txt">
            <h3>2018</h3>
          </div>

          <div className="text-box">
            <p>
              Better Mortgage partners with Ally Bank to build Ally powered by
              Better.
            </p>
          </div>
        </div>
        <div className="container right">
          <div className="txt">
            <h3>2019</h3>
          </div>
          <div className="text-box">
            <p>
              Better Mortgage launches its pilot partnership with American
              Express to deliver a seamless homebuying experience to AMEX
              customers.
            </p>
          </div>
        </div>

        <div className="container left">
          <div className="txt">
            <h3>2021</h3>
          </div>

          <div className="text-box">
            <p>
              Better acquires Trussle — The UK’s most innovative online mortgage
              broker.
            </p>
          </div>
        </div>
        <div className="container right">
          <div className="txt">
            <h3>2022</h3>
          </div>
          <div className="text-box">
            <p>
              Better Mortgage becomes the first fintech to fund $100B home loans
              entirely online.
            </p>
          </div>
        </div>

        <div className="container left">
          <div className="txt">
            <h3>2023</h3>
          </div>

          <div className="text-box">
            <p>
              Better Mortgage launches One Day Mortgage¹: The first offering to
              customers to go from application to full mortgage Commitment
              Letter within 24 hours vs. typical industry process of 30+ days.
            </p>
          </div>
        </div>
        <div className="container right">
          <div className="text-box">
            <p>Better Mortgage launches the fully digital 3-day HELOC².</p>
          </div>
        </div>
        <div className="container left">
          <div className="text-box">
            <p>Better Mortgage launches One Day Verified Approval Letter.</p>
          </div>
        </div>

        <div className="container right">
          <div className="txt">
            <h3>Today</h3>
          </div>
          <div className="text-box">
            <p>
              You become part of the story by joining tens of thousands of happy
              Better Mortgage borrowers.
            </p>
            <button className="start-btn">Get Started</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
