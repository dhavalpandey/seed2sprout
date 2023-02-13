import React from "react";
import "./Navbar.css";
import Logo from "../../Images/logo.png";

export default function Navbar() {
  return (
    <div>
      <nav className="nav">
        <img className="logo" alt="logo" src={Logo} />
        <div className="container">
          <h1 className="current-page">Home</h1>
          <div className="menu">
            <div className="bar 1"></div>
            <div className="bar 2"></div>
            <div className="bar 3"></div>
          </div>
        </div>
      </nav>
    </div>
  );
}
