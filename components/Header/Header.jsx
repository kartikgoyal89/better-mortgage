import React, { useState } from "react";
import "./header.css";
import { MdPhone } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "../../components/Sidebar/Sidebar";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [menuNew, setMenuNew] = useState("closed");

  return (
    <header className="header">
      <div className="logo">Better</div>
      <div className="links">
        <nav className="nav">
          <a href="#">Buy</a>
          <a href="#">Refinance</a>
          <a href="#">HELOC</a>
          <a href="#">Rates</a>
          <a href="#">Better+</a>
        </nav>
        <div className="right-part">
          <div className="phone">
            <MdPhone />
          </div>
          <p className="mb-0">Sign in</p>
          <div className="ham" onClick={() => setOpen(!open)}>
            <RxHamburgerMenu
              onClick={() => setMenuNew("open")}
              className="fs-2"
            />
            <Sidebar
              menuNew={menuNew}
              crossClicked={() => setMenuNew("closed")}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
