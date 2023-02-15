import React from "react";
import ForestBackground from "../../Images/Treebackground.png";
import "./Home.css";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div className="home">
      <Helmet>
        <title>Seed2Sprout • Home</title>
      </Helmet>
      <h1 className="slogan">Seed the Change, Sprout the Difference</h1>
      <div className="images">
        <img
          width="50%"
          height="100%"
          alt="Exhilatring and eyecatching forest setting"
          src={ForestBackground}
        />
        <img
          width="50%"
          height="100%"
          alt="Exhilatring and eyecatching forest setting"
          src={ForestBackground}
        />
      </div>
      <div className="colour-background"></div>
    </div>
  );
}
