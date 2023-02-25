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
            display: "none",
          }}
          alt="preload img"
          src={ForestBackground}
        />
        <img
          style={{ display: "none" }}
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
        <div className="slogan-div">
          <h1 className="slogan typing">
            <span>Seed </span>
            <span> the</span>
            <span>Change,</span>
            <span>Sprout</span>
            <span>the</span>
            <span>Difference</span>
          </h1>
        </div>
        <div className="images">
          <img
            width="50%"
            height="100%"
            alt="Exhilatring and eyecatching forest setting"
            src={ForestBackground}
            className="pic1"
          />
          <img
            width="50%"
            height="100%"
            alt="Exhilatring and eyecatching forest setting"
            src={ForestBackground}
            className="pic2"
          />
        </div>
        <div className="colour-background"></div>
      </div>
    );
  }
}
