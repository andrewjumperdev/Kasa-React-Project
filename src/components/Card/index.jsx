import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link
      to={`/logement/${props.id}`}
      className="card-image"
      style={{ backgroundImage: `url(${props.pictures})` }}
    >
      <div className="card-content">
      <p className="card-title">{props.title}</p>
      </div>
      
    </Link>
  );
}

export default Card;
