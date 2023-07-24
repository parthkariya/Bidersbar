import React from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscBellDot } from "react-icons/vsc";

const Navbar = () => {
  return (
    <div className="nav_main_wrapp">
      <GiHamburgerMenu className="menu_side" onClick={() => {}} />
      <h2 className="h2">Bidder’s Bar</h2>
      <VscBellDot className="menu_side" />
    </div>
  );
};

export default Navbar;
