import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "96ad27349a64ea1dcdfbe6f4d458c085";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="weatherForecast">
      <div>Thu</div>
      <WeatherIcon iconId="01d" size={32} />
      <div>19 10</div>
    </div>
  );
}
