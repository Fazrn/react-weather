import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  console.log(props.data);
  function temperatureMax() {
    return Math.round(props.data.temp.max);
  }
  function temperatureMin() {
    return Math.round(props.data.temp.min);
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="weatherForecast">
      <div className="pb-3">{day()}</div>
      <WeatherIcon iconId={props.data.weather[0].icon} />
      <div>
        <span>{temperatureMax()}</span>
        <span className="ms-3 text-secondary">{temperatureMin()}</span>
      </div>
    </div>
  );
}
