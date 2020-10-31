import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Card({ icon, title, text, id }) {
  return (
    <div className="card">
      <Link to="/services" id="link">
        <div className="card__icon">
          <img src={icon} />
        </div>
        <div className="card__info">
          <div className="card__title">
            <h3>{title}</h3>
          </div>
          <div className="card__text">
            <p>{text}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
