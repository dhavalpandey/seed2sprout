import React from "react";
import GlobalInfo from "./GlobalInfo";
import "./Details.css";
import { Helmet } from "react-helmet";

export default function Carrots() {
  return (
    <div>
      <h1 className="page-title">
        <span>Carrot</span> <span>Seeds</span> <span>101:</span>{" "}
        <span>Everything</span> <span>You</span> <span>Need</span>{" "}
        <span>to</span> <span>Know</span>
      </h1>
      <div className="details-page">
        <Helmet>
          <title>
            Seed2Sprout • Carrot Seeds 101: Everything You Need to Know
          </title>
        </Helmet>
        <GlobalInfo />
      </div>
    </div>
  );
}
