import React from "react";
import "./MenuContent.css";
import SilvaLogo from "../../../Images/rounded_silva_logo.png";

export default function MenuContent() {
  return (
    <div className="menu-content">
      <a href="/" className="link">
        <h1>Home</h1>
      </a>
      <a href="/about" className="link">
        <h1>About Us</h1>
      </a>
      <a href="/seeds" className="link">
        <h1>Planting Instructions</h1>
      </a>
      <a href="https://www.instagram.com/silvateam.ye/" className="link">
        <h1>Our Journey</h1>
      </a>
      <a href="/contact" className="link">
        <h1>Contact Us</h1>
      </a>
      <img className="silvalogo" alt="silvalogo" src={SilvaLogo} />
    </div>
  );
}
