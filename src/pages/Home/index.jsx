import React from "react";
import "../Home/styles.scss";
import Card from "../../components/Card";
import { useCallApiHook } from "../../hooks/API";

const Home = () => {
  const { data, loading, error } = useCallApiHook();

  if (loading) {
    return <div><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="main-container">
      <div className="container">
        <div className="hero-image">
          <div className="hero-text">
            <p>Chez vous, <br/> partout et ailleurs</p>
          </div>
        </div>
      </div>
      <div className="container__card">
        {data.map((item, index) => (
          <Card
            key={index}
            id={item.id}
            title={item.title}
            pictures={item.pictures[0]}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
