import React from "react";
import GlobalInfo from "./GlobalInfo";
import "./Details.css";
import { Helmet } from "react-helmet";
import CarrotsSeeds from "../../../Images/carrots-seeds.png";
import Carrots1 from "../../../Images/carrots1.png";
import Carrots2 from "../../../Images/carrots2.png";
import FadeIn from "react-fade-in";
import Tips from "./Tips";

export default function Carrots() {
  return (
    <div>
      <h1 className="page-title">
        <span>From</span> <span>Seed</span> <span>2</span> <span>Carrot:</span>{" "}
        <span>Your</span> <span>Guide</span> <span>to</span>{" "}
        <span>Planting</span> <span>Success</span>
      </h1>
      <FadeIn>
        <div className="details-page">
          <Helmet>
            <title>
              Seed2Sprout • From Seed 2 Carrot: Your Guide to Planting Success
            </title>
          </Helmet>
          <GlobalInfo />
          <div className="details-container">
            <img src={CarrotsSeeds} alt="carrot-seeds" className="detail-img" />
          </div>
          <div className="section">
            <div className="details-container1">
              <img src={Carrots1} alt="carrots1" className="detail-img1" />
            </div>
            <div className="subsection1">
              <Tips />
            </div>
          </div>
          <div className="info">
            <h2 className="section-title">How can Carrots be Eaten?</h2>
            <ul>
              <li>With humus (our favourite)!</li>
              <li>
                Roasted or steamed in a super healthy side dish (e.g. with a
                roast dinner)
              </li>
              <li>Spiced carrot and lentil soup</li>
              <li>Carrot biryani</li>
              <li>Roasted sweet potato and carrot soup</li>
              <li>Halloumi, carrot and orange salad</li>
              <li>In a carrot cake!</li>
              <li>Beef and stout stew with carrots</li>
            </ul>
          </div>
          <div className="details-container">
            <img src={Carrots2} alt="carrots2" className="detail-img" />
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
