import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function Weatherinfo(props) {
  return (
    <div className="row pt-2 pb-5">
      <div className="col-7  ">
        <div className="ps-3">
          <WeatherIcon iconId={props.weatherData.img} size={49} />
          <WeatherTemperature celsius={props.weatherData.temperature} />
        </div>

        <div className="weather-data  ms-3">
          <ul>
            <li>Humidity: {props.weatherData.humidity}%</li>
            <li>Wind: {Math.round(props.weatherData.wind)} km/h</li>
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
