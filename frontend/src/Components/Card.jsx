import React from "react";
import "../Component-style/card.css";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link to="/placeholder_for_props">
      <div className="card" key={props.key}>
        <img src={props.Image} alt="" />
        <h2>{props.heading}</h2>
        <p>{props.content}</p>
      </div>
    </Link>
  );
}

export default Card;
