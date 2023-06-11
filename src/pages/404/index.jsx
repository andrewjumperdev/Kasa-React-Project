import React from "react";
import { Link } from "react-router-dom";
import './404Styles.scss'

const PageNotFound = () => {
  return (
    <div className="page-container">
      <div className="info-container-page">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
};

export default PageNotFound;
