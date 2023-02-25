import React from "react";
import "./Card.css";

export default function Card(props) {
  const img = props.img;
  const seed = props.seed;

  return (
    <div>
      <a href={"/seeds/" + props.name}>
        <div className="card">
          <div className="img-container">
            <img height="275" src={img} alt={seed} />
          </div>
          <button className="button">Dig through {seed}</button>
        </div>
      </a>
    </div>
  );
}
