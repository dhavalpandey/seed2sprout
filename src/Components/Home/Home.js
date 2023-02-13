import React from "react";
import ForestBackground from "../../Images/Treebackground.png";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
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
