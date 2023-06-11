import React, { useState } from 'react';
import './Rating.scss';


const Rating = ({ value }) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      const starClass = i <= value ? "fa-solid fa-star" :"fa-regular fa-star";
      stars.push(<span key={i} className={starClass}></span>);
    }
    console.log(stars)
    return <div>{stars}</div>;
  };
  
  export default Rating;