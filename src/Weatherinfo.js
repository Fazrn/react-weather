import React from "react";
import FormattedDate from "./FormattedDate";

export default function Weatherinfo(props) {
  return (
    <div className="row">
      <div className="col-7 d-inline-block">
        <img
          src={props.weatherData.img}
          alt={props.weatherData.description}
          className="ms-1"
        />
        <span className="temperature ">
          {Math.round(props.weatherData.temperature)}
        </span>
        <span className="unit ms-1">°C</span>
        <div className="weather-data d-inline-block ms-2">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 35%</li>
            <li>Wind: 8 km/h</li>
          </ul>
        </div>
      </div>
      <div className="col-5 date-desc-container">
        <div className="city">{props.weatherData.name}</div>
        <ul className="date-desc">
          <FormattedDate date={props.weatherData.date} />

          <li className="text-capitalize">{props.weatherData.description}</li>
        </ul>
      </div>
    </div>
  );
}
