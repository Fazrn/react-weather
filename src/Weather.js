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
    });
    setReady(true);
    setCityInput("");
  }

  function search() {
    const apiKey = "9feaf93d48daeaeeb2d9ea551226a8c4";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
    setCityInput(event.target.value);
  }

  if (ready) {
    return (
      <div className="Weather">
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
        <Weatherinfo weatherData={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return <div>Loading ...</div>;
  }
}
