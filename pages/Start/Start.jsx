import React from "react";
import { MdPhone } from "react-icons/md";
import { TbDiscount } from "react-icons/tb";
import { MdOutlineTabletMac } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Meta from "../../components/Meta/Meta";
import { FaLinkedin } from "react-icons/fa";

import "./start.css";

const Start = () => {
  return (
    <div className="start-container">
      <Meta title={"Start Page"} />
      <div className="start-header">
        <div className="upper-part d-flex align-items-center">
          <div className="left">
            <h3>Better</h3>
            <p className="mb-0">Mortage</p>
          </div>
          <div className="right">
            <button>
              <div className="phone">
                <MdPhone />
              </div>
              <p className="mb-0">Need help? Call(415) 523 8838</p>
            </button>
          </div>
        </div>
        <div className="line-part">
          <div className="line-start"></div>
          <div className="line-img">
            <img
              src="https://media.better.com/components/preapproval/industry-parity-v2/betty1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="start-hero">
        <div className="heading-start">
          <h3>Hi, I'm Betty!</h3>
          <h3 className="start-heading">What can I help you with?</h3>
          <div className="btns">
            <button className="start-start-btn">Buying a home</button>
            <button className="start-start-btn">Refiance my mortgage</button>
            <button className="start-start-btn">Get cash from my home</button>
          </div>

          <div className="price">
            <div>
              <h3>$100B</h3>
              <p>home loans funded entirely online</p>
            </div>
            <div>
              <h3>400K</h3>
              <p>Customers who chose a Better Mortgage</p>
            </div>
          </div>

          <div className="box">
            <p>After a few questions, you'll unlock:</p>
            <div>
              <p>
                <TbDiscount className="me-2 box-icon" />
                Custom mortage rates
              </p>
            </div>
            <div>
              <p>
                <MdOutlineTabletMac className="me-2 box-icon" />
                Exclusive Offers
              </p>
            </div>
            <div>
              <p>
                <BiDollarCircle className="me-2 box-icon" />A personalized
                dashboard
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="start-footer">
        <div className="col-1">
          <h3 className="mb-4 green-heading">Better</h3>
          <p>
            Better is a family of companies serving all your homeownership
            needs.
          </p>

          <div className="col1-divs">
            <h5>
              <span className="green">Better</span> Real Estate
            </h5>
            <p>
              Connect with a local Better Real Estate Partner Agent to find out
              all the ways you can save.
            </p>
          </div>

          <div className="col1-divs">
            <h5>
              <span className="green">Better</span> Cover
            </h5>
            <p>
              Shop, bundle, and save on insurance coverage for home, auto, life,
              and more.
            </p>
          </div>

          <div className="col1-divs">
            <h5>
              <span className="green">Better</span> Inspect
            </h5>
            <p>
              Get free repair estimates, 24-hour turnarounds on reports, and
              rest easy with our 100-day inspection guarantee.
            </p>
          </div>

          <div className="col1-divs">
            <h5>
              <span className="green">Better</span> Settlement Services
            </h5>
            <p>
              Get transparent rates when you shop for title insurance all in one
              convenient place.
            </p>
          </div>
        </div>
        <div className="col-2">
          <div className="col-2-1">
            <h5>Resources</h5>
            <ul>
              <li>Home affordability calculator</li>
              <li>Mortgage Calculator</li>
              <li>Free mortgage calculator</li>
              <li>Mortgage Calculator with taxes</li>
              <li>Mortgage calculator with PMI</li>
              <li>Rent vs buy calculator</li>
              <li>HELOC payment calculator</li>
              <li>HELOC vs cash-out refinance calculator</li>
              <li>Buy a home</li>
              <li>Sell a home</li>
              <li>Get home inspection</li>
            </ul>
          </div>
          <div className="col-2-2">
            <h5>Company</h5>
            <ul>
              <li>Start Us</li>
              <li>Careers</li>
              <li>Media</li>
              <li>Partner With Us</li>
              <li>Learning center</li>
              <li>FAQs</li>
              <li>Investor Relations</li>
            </ul>
          </div>
          <div className="col-2-3">
            <h5>Company</h5>
            <ul>
              <li>Start Us</li>
              <li>Careers</li>
              <li>Media</li>
              <li>Partner With Us</li>
              <li>Learning center</li>
              <li>FAQs</li>
              <li>Investor Relations</li>
            </ul>

            <h5 className="mt-5">Legal</h5>
            <ul>
              <li>NMLS Consumer Access</li>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Disclosure of Learning</li>
              <li>Afflimated Business</li>
              <li>Browser Disclaimer</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lower-footer">
        <div className="icons">
          <div>
            <FaFacebookSquare />
          </div>
          <div>
            <FaInstagram />
          </div>
          <div>
            <FaLinkedin />
          </div>
        </div>
        <hr />
        <p>
          © 2024 Better Home & Finance Holding Company and/or its affiliates.
          Better is a family of companies. Better Mortgage Corporation provides
          home loans; Better Real Estate, LLC and Better Real Estate California
          Inc License # 02164055 provides real estate services; Better Cover,
          LLC sells insurance products; and Better Settlement Services provides
          title insurance services; and Better Inspect, LLC provides home
          inspection services. All rights reserved.
        </p>
        <p>
          Home lending products offered by Better Mortgage Corporation. Better
          Mortgage Corporation is a direct lender. NMLS #330511. 3 World Trade
          Center, 175 Greenwich Street, 57th Floor, New York, NY 10007. Loans
          made or arranged pursuant to a California Finance Lenders Law License.
          Not available in all states. Equal Housing Lender. NMLS Consumer
          Access
        </p>
        <p>
          Better Real Estate, LLC dba BRE, Better Home Services, BRE Services,
          LLC and Better Real Estate, and operating in the State of California
          through its wholly owned subsidiary Better Real Estate California
          Inc., is a licensed real estate brokerage and maintains its corporate
          headquarters at 325-41 Chestnut Street, Suite 826, Philadelphia, PA
          19106. Here is a full listing of Better Real Estate, LLC’s license
          numbers. Better Real Estate, LLC provides access to real estate
          brokerage services via its nationwide network of partner brokerages
          and real estate agents (“Better Real Estate Partner Agents”). Equal
          Housing Opportunity. All rights reserved.
        </p>
        <p>
          New York State Fair Housing Notice
          <br />
          New York Standard Operating Procedures
        </p>
        <p>
          Texas Real Estate Commission: Information Start Brokerage Services |
          Consumer Protection Notice
        </p>
        <p>
          Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803,
          Philadelphia, PA 19106.
        </p>
        <p>
          Homeowners insurance policies are offered through Better Cover, LLC, a
          Pennsylvania Resident Producer Agency. License #881593. 325-41
          Chestnut Street, Suite 807, Philadelphia, PA 19106.
        </p>
        <p>
          Insurance quotes and policies are offered through Better Cover, LLC. A
          Pennsylvania Resident Producer Agency. License #881593. Here is a full
          listing of Better Cover, LLC’s license numbers.
        </p>
        <p>
          Better Inspect, LLC maintains its corporate headquarters at 325-41
          Chestnut Street, Suite 846, Philadelphia, PA 19106.
        </p>
        <p>
          Better Mortgage Corporation, Better Real Estate, LLC, Better
          Settlement Services, LLC, Better Cover, LLC, Better Connect, LLC dbs
          Better Attorney Match, and Better Inspect, LLC are separate operating
          subsidiaries of Better Home & Finance Holding Company. Each company is
          a separate legal entity operated and managed through its own
          management and governance structure as required by its state of
          incorporation, and applicable and legal and regulatory requirements.
          Products not available in all states.
        </p>
        <p>
          Any unauthorized use of any proprietary or intellectual property is
          strictly prohibited. All trademarks, service marks, trade names,
          logos, icons, and domain names are proprietary to Better Home &
          Finance Holding Company. Better Home & Finance Holding Company
          trademarks are federally registered with the U. S. Patent and
          Trademark Office. Better Cover is a registered trademark with the U.S.
          Patent and Trademark Office and is owned by Better Cover, LLC.
        </p>
      </div>
    </div>
  );
};

export default Start;
