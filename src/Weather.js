import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import Weatherinfo from "./Weatherinfo.js";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);
  const [cityInput, setCityInput] = useState("");
  const [error, setError] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      coordinates: response.data.coord,
      name: response.data.name,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      img: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      condition: response.data.weather[0].main,
    });
    setReady(true);
    setCityInput("");
    setError(null);
  }

  function search() {
    const apiKey = "9feaf93d48daeaeeb2d9ea551226a8c4";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setError("City not found. Please try again.");
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
    setCityInput(event.target.value);
  }

  function getBackgroundClass(weatherCondition) {
    switch (weatherCondition) {
      case "Clear":
        return "bg-clear";
      case "Clouds":
        return "bg-cloudy";
      case "Rain":
        return "bg-rainy";
      case "Snow":
        return "bg-snowy";
      case "Thunderstorm":
        return "bg-thunderstorm";
      case "Drizzle":
        return "bg-drizzle";
      case "Mist":
      case "Fog":
      case "Haze":
        return "bg-misty";
      default:
        return "bg-default";
    }
  }

  if (ready) {
    const backgroundClass = getBackgroundClass(weatherData.condition);

    return (
      <div className={`Weather ${backgroundClass}`}>
        <form className="p-2" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                placeholder="Enter a city ..."
                type="search"
                className="form-control"
                onChange={handleChange}
                value={cityInput}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        {error && <div className="alert alert-danger mt-3">{error}</div>}{" "}
        {/* Display error message */}
        <Weatherinfo weatherData={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return <div>Loading ...</div>;
  }
}
