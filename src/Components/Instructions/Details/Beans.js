import React from "react";
import GlobalInfo from "./GlobalInfo";
import "./Details.css";
import { Helmet } from "react-helmet";
import BeansSeeds from "../../../Images/beans-seeds.png";
import Beans1 from "../../../Images/beans1.png";
import Beans2 from "../../../Images/beans2.png";
import FadeIn from "react-fade-in";
import Tips from "./Tips";

export default function Beans() {
  return (
    <div>
      <h1 className="page-title">
        <span>From</span> <span>Seed</span> <span>2</span> <span>Vine:</span>{" "}
        <span>A</span> <span>guide</span> <span>to</span>
        <span>growing</span> <span>Runner</span> <span>Beans</span>
      </h1>
      <FadeIn>
        <div className="details-page">
          <Helmet>
            <title>
              Seed2Sprout • From Seed 2 Vine: A guide to growing Runner Beans
            </title>
          </Helmet>
          <GlobalInfo />
          <div className="details-container">
            <img src={BeansSeeds} alt="Beans-seeds" className="detail-img" />
          </div>
          <div className="section">
            <div className="details-container1">
              <img src={Beans1} alt="Beans1" className="detail-img1" />
            </div>
            <div className="subsection1">
              <Tips />
            </div>
          </div>
          <div className="info">
            <h2 className="section-title">How can Runner Beans be Eaten?</h2>
            <ul>
              <li>Thai shredded runner bean and chicken salad</li>
              <li>In a nutty salad side dish</li>
              <li>Sri Lankan runner bean curry (super tasty!)</li>
              <li>Charred courgettes, ricotta and runner beans</li>
              <li>In a prawn paella</li>
              <li>Runner bean samosas</li>
              <li>Steamed as a side dish (e.g. to saturday steak)</li>
              <li>Runner bean and prosciutto pasta</li>
              <li>Tapenade chicken pasta with runner beans</li>
            </ul>
          </div>
          <div className="details-container">
            <img src={Beans2} alt="Beans2" className="detail-img" />
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
