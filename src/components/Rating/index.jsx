import React from 'react';
import './styles.scss';


const Rating = ({ value }) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      const starClass = i <= value ? "fa-solid fa-star" :"fa-regular fa-star";
      stars.push(<span key={i} className={starClass}></span>);
    }
    return <div>{stars}</div>;
  };
  
  export default Rating;