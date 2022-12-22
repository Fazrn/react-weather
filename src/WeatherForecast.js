import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);
  function handleResponse(response) {
    setLoaded(true);
    setForecastData(response.data.list);
  }
  if (loaded) {
    return <WeatherForecastDay forecastData={forecastData} />;
  } else {
    let apiKey = "9feaf93d48daeaeeb2d9ea551226a8c4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&cnt=5&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
