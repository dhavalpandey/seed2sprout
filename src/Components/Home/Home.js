import React, { useState, useEffect } from "react";
import ForestBackground from "../../Images/Treebackground.png";
import Logo from "../../Images/logo.png";
import "./Home.css";
import { Helmet } from "react-helmet";
import Loading from "../Loading/Loading";
import Navbar from "../Navbar/Navbar";

export default function Home() {
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 800);
  }, []);

  if (spinner === true) {
    return (
      <div style={{ overflow: "hidden" }}>
        <Helmet>
          <title>Seed2Sprout • Home</title>
        </Helmet>
        <Loading />
        <img
          style={{
            visibility: "hidden",
          }}
          alt="preload img"
          src={ForestBackground}
        />
        <img
          style={{ height: "10px" }}
          className="logo"
          alt="logo"
          src={Logo}
        />
      </div>
    );
  } else {
    return (
      <div className="home">
        <Navbar />
        <Helmet>
          <title>Seed2Sprout • Home</title>
        </Helmet>
        <h1 className="slogan typing">
          <span>Seed </span>
          <span> the</span>
          <span>Change,</span>
          <span>Sprout</span>
          <span>the</span>
          <span>Difference</span>
        </h1>
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
}
