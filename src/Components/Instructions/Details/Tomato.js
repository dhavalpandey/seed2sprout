import React from "react";
import GlobalInfo from "./GlobalInfo";
import "./Details.css";
import { Helmet } from "react-helmet";
import TomatoesSeeds from "../../../Images/tomatoes-seeds.png";
import Tomato1 from "../../../Images/tomatoes1.png";
import Tomato2 from "../../../Images/tomatoes2.png";
import FadeIn from "react-fade-in";
import Tips from "./Tips";

export default function Tomato() {
  return (
    <div>
      <div className="page-title1">
        <h1>
          <span>Tomato Garderner's Delight</span>
        </h1>
      </div>
      <FadeIn>
        <div className="details-page">
          <Helmet>
            <title>
              Seed2Sprout • Seed 2 Sauce: Tomato Garderner's Delight
            </title>
          </Helmet>
          <GlobalInfo />
          <div className="details-container">
            <img
              src={TomatoesSeeds}
              alt="tomato-seeds"
              className="detail-img"
            />
          </div>
          <div className="section">
            <div className="details-container1">
              <img src={Tomato1} alt="tomato1" className="detail-img1" />
            </div>
            <div className="subsection1">
              <Tips />
              <div>
                <img src={Tomato1} alt="Tomato1" className="hidden-img" />
              </div>
            </div>
          </div>
          <div className="info">
            <h2 className="section-title">How can Tomatoes be Eaten?</h2>
            <ul>
              <li>Often eaten best fresh in a light, refreshing salad</li>
              <li>On pizza!</li>
              <li>On your TACOS!</li>
              <li>In your tomato & basil soup</li>
              <li>Tomato and mascarpone risotto</li>
              <li>Roasted aubergine and tomato curry</li>
              <li>Easy tomato pasta</li>
              <li>Tomato penne with avocado</li>
            </ul>
          </div>
          <div className="details-container">
            <img src={Tomato2} alt="tomato2" className="detail-img" />
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
