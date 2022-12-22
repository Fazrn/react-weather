import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  console.log(props.forecastData);
  function temperatureMax() {
    return Math.round(props.forecastData[0].main.temp_max);
  }
  function temperatureMin() {
    return Math.round(props.forecastData[0].main.temp_min);
  }
  function day() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const date = new Date(props.forecastData[0].dt * 1000);
    const day = date.getDay();
    return days[day];
  }
  return (
    <div className="weatherForecast">
      <div>{day()}</div>
      <WeatherIcon iconId="01d" size={32} />
      <div>
        <span>{temperatureMax()}</span> {temperatureMin()}
      </div>
    </div>
  );
}
