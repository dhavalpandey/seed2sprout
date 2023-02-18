import React from "react";
import GlobalInfo from "./GlobalInfo";
import "./Details.css";
import { Helmet } from "react-helmet";
import CarrotsSeeds from "../../../Images/carrots-seeds.png";
import FadeIn from "react-fade-in";

export default function Carrots() {
  return (
    <div>
      <h1 className="page-title">
        <span>Carrot</span> <span>Seeds</span> <span>101:</span>{" "}
        <span>Everything</span> <span>You</span> <span>Need</span>{" "}
        <span>to</span> <span>Know</span>
      </h1>
      <FadeIn>
        <div className="details-page">
          <Helmet>
            <title>
              Seed2Sprout • Carrot Seeds 101: Everything You Need to Know
            </title>
          </Helmet>
          <GlobalInfo />
          <div className="card1">
            <div className="img-container-details">
              <img src={CarrotsSeeds} alt="carrot-seeds" />
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
