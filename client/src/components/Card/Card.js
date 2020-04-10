import React from "react";
import "./Card.scss";

const Card = ({ weather }) => {
  if (weather) {
  let timeSrc = weather.isDayTime ? "img/day.jpeg" : "img/night1.jpeg";

  return (
    <div className="card form center shadow-lg roundeds mt-5"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/${timeSrc})`,
          height: "400px",
        }}
      >
      <div className="icon bg-light mx-auto text-center">
        <div
          className="test"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/icons/${weather.icon}.svg)`
          }}
        />
      </div>
      <div className="text-muted text-uppercase text-center details"></div>
      <h1 className="name text-center white">{weather.cityName}</h1>
      <h3 className="text-center white">{weather.text}</h3>
      <h1 className="text-center white">{weather.temperature}<span>&deg;C</span></h1>
    </div>
  );
  } else {
    return null;
  }
};

export default Card;
