import React from "react";
import "./Instructions.css";
import { Helmet } from "react-helmet";
import Card from "./Card";
import Carrots from "../../Images/carrots.png";
import Tomatoes from "../../Images/tomatoes.png";
import Cucumbers from "../../Images/cucumbers.png";
import lettuce from "../../Images/lettuce.png";
import Beans from "../../Images/beans.png";
import FadeIn from "react-fade-in";

export default function Home() {
  return (
    <div className="instructions">
      <Helmet>
        <title>
          Seed2Sprout • Sow, Grow, and Know: The Ultimate Seed Planting Guide
        </title>
      </Helmet>
      <div className="page-title">
        <h1>
          <span>Sow,</span>
          <span>Grow,</span>
          <span>and</span>
          <span>Know:</span>
          <span>The</span>
          <span>Ultimate</span>
          <span>Seed</span>
          <span>Planting</span>
          <span>Guide</span>
        </h1>
      </div>
      <FadeIn>
        <div className="grid">
          <Card seed="Carrot Seeds" img={Carrots} name="carrot-seeds" />
          <Card seed="Tomato Seeds" img={Tomatoes} name="tomato-seeds" />
          <Card seed="Lettuce Seeds" img={lettuce} name="lettuce-seeds" />
          <Card seed="Cucumber Seeds" img={Cucumbers} name="cucumber-seeds" />
          <Card seed="Runner Bean Seeds" img={Beans} name="runner-bean-seeds" />
        </div>
      </FadeIn>
    </div>
  );
}
