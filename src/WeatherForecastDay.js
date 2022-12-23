import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  console.log(props.data);
  function temperatureMax() {
    return Math.round(props.data.temperature.maximum);
  }
  function temperatureMin() {
    return Math.round(props.data.temperature.minimum);
  }
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="weatherForecast">
      <div>{day()}</div>
      <img
        src={props.data.condition.icon_url}
        alt={props.data.condition.description}
      />
      <div>
        <span>{temperatureMax()}</span> {temperatureMin()}
      </div>
    </div>
  );
}
