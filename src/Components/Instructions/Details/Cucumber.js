import React from "react";
import GlobalInfo from "./GlobalInfo";
import "./Details.css";
import { Helmet } from "react-helmet";
import CucumberSeeds from "../../../Images/cucumber-seeds.png";
import Cucumber1 from "../../../Images/cucumbers1.png";
import Cucumber2 from "../../../Images/cucumbers2.png";
import FadeIn from "react-fade-in";
import Tips from "./Tips";

export default function Cucumber() {
  return (
    <div>
      <div className="page-title1">
        <h1>
          <span>Cucumber Marketmore</span>
        </h1>
      </div>
      <FadeIn>
        <div className="details-page">
          <Helmet>
            <title>Seed2Sprout • Seed 2 Snack: Cucumber Marketmore</title>
          </Helmet>
          <GlobalInfo />
          <div className="details-container">
            <img
              src={CucumberSeeds}
              alt="Cucumber-seeds"
              className="detail-img"
            />
          </div>
          <div className="section">
            <div className="details-container1">
              <img src={Cucumber1} alt="Cucumber1" className="detail-img1" />
            </div>
            <div className="subsection1">
              <Tips />
              <div>
                <img src={Cucumber1} alt="Cucumber1" className="hidden-img" />
              </div>
            </div>
          </div>
          <div className="info">
            <h2 className="section-title">How can Cucumbers be Eaten?</h2>
            <ul>
              <li>Chopped up and tumbled in any salad!</li>
              <li>On TACOS!</li>
              <li>Pickled radish and cucumber salad</li>
              <li>Tomato, cucumber and coriander salad</li>
              <li>
                Cucumber and elderflower spritzer (a party guests favourite!)
              </li>
              <li>Creamy cucumber with gravadlax</li>
              <li>Cucumber, pea and lettuce soup</li>
              <li>Salmon, avocado and cucumber salad</li>
            </ul>
          </div>
          <div className="details-container">
            <img src={Cucumber2} alt="Cucumber2" className="detail-img" />
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
