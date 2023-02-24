import React from "react";
import "./Navbar.css";
import Logo from "../../Images/logo.png";
import MenuContent from "./MenuContent/MenuContent";

export default function Navbar() {
  let page = window.location.pathname.slice(1);
  let pageText;

  if (page === "") {
    pageText = "Home";
  } else if (page === "about") {
    pageText = "About";
  } else if (page === "seeds") {
    pageText = "Seeds";
  } else if (page === "contact") {
    pageText = "Contact";
  } else if (page === "seeds/cucumber-seeds") {
    pageText = "Cucumber";
  } else if (page === "seeds/carrot-seeds") {
    pageText = "Carrot";
  } else if (page === "seeds/tomato-seeds") {
    pageText = "Tomato";
  } else if (page === "seeds/lettuce-seeds") {
    pageText = "Lettuce";
  } else if (page === "seeds/runner-bean-seeds") {
    pageText = "Beans";
  }

  return (
    <div>
      <nav className="nav">
        <a href="/">
          <img className="logo" alt="logo" src={Logo} />
        </a>
        <input type="checkbox" id="burger-toggle" />
        <label htmlFor="burger-toggle" className="container burger-menu">
          <h1 className="current-page">{pageText}</h1>
          <div className="nav-menu">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </label>

        <div className="menu">
          <MenuContent />
        </div>
      </nav>
    </div>
  );
}
