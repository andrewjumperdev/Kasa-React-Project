import React from "react";
import "../Home/styles.scss";
import Card from "../../components/Card";
import { useCallApiHook } from "../../hooks/API";

function Home() {
  const { data, loading, error } = useCallApiHook();

  console.log(data)

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  

  return (
    <>
      <div className="container">
        <div className="hero-image">
          <div className="hero-text">
            <h1>Chez vous,partout et ailleurs</h1>
          </div>
        </div>
      </div>
      <div className="container__card">
        {data.map((item, index) => (
          <Card key={index} id={item.id} title={item.title} pictures={item.pictures[0]}/>
        ))}      
      </div>
    </>
  );
}

export default Home;
