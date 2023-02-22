import React from "react";
import "./Loading.css";
import SilvaLogo from "../../Images/rounded_silva_logo.png";

export default function Loading() {
  return (
    <div className="preloader">
      <img className="silvalogo silva-loader" alt="silvalogo" src={SilvaLogo} />
    </div>
  );
}
