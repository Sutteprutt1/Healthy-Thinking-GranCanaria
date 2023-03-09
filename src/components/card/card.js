import React from "react";
import "./card.scss";

// Card component that will display Activity name, Activity image, and add/remove button
export function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="Avatar" />
      <div className="container">
        <h4>
          <b>{props.name}</b>
        </h4>
        <p>{props.email}</p>
      </div>
    </div>
  );
}
