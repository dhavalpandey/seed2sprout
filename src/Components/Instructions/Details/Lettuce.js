import React from "react";
import GlobalInfo from "./GlobalInfo";
import "./Details.css";
import { Helmet } from "react-helmet";
import LettuceSeeds from "../../../Images/lettuce-seeds.png";
import Lettuce1 from "../../../Images/lettuce1.png";
import Lettuce2 from "../../../Images/lettuce2.png";
import FadeIn from "react-fade-in";
import Tips from "./Tips";

export default function Lettuce() {
  return (
    <div>
      <div className="page-title1">
        <h1>
          <span>Lettuce All Year Round</span>
        </h1>
      </div>
      <FadeIn>
        <div className="details-page">
          <Helmet>
            <title>Seed2Sprout • Seed 2 Salad: Lettuce All Year Round</title>
          </Helmet>
          <GlobalInfo />
          <div className="details-container">
            <img
              src={LettuceSeeds}
              alt="Lettuce-seeds"
              className="detail-img"
            />
          </div>
          <div className="section">
            <div className="details-container1">
              <img src={Lettuce1} alt="Lettuce1" className="detail-img1" />
            </div>
            <div className="subsection1">
              <Tips />
              <div>
                <img src={Lettuce1} alt="Lettuce1" className="hidden-img" />
              </div>
            </div>
          </div>
          <div className="info">
            <h2 className="section-title">How can Lettuce be Eaten?</h2>
            <ul>
              <li>In a green salad</li>
              <li>In a classic cheeseburger!</li>
              <li>In a green leaf lettuce, pomegranate and almond salad</li>
              <li>Thai green pork lettuce cups (a must try)</li>
              <li>
                Teriyaki beef and lettuce wraps (an absolute party showstopper)
              </li>
              <li>Griddled lettuce and peas tumbled with (any) nuts</li>
              <li>Healthy tuna lettuce wraps</li>
            </ul>
          </div>
          <div className="details-container">
            <img src={Lettuce2} alt="Lettuce2" className="detail-img" />
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
