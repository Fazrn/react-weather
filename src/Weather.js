import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.temperature.current,
      name: response.data.city,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      img: response.data.condition.icon_url,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="weather">
        <form className="p-2">
          <div className="row">
            <div className="col-9">
              <input
                placeholder="Enter a city ..."
                type="search"
                className="form-control"
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
        <div className="row">
          <div className="col-7 d-inline-block">
            <img
              src={weatherData.img}
              alt={weatherData.description}
              className="ms-1"
            />
            <span className="temperature ">
              {Math.round(weatherData.temperature)}
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
            <div className="city">{weatherData.name}</div>
            <ul className="date-desc">
              <li>Monday 7:00 pm</li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "dtf4dd4d48882e03b8030ob0a0b3714d";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return <div>Loading ...</div>;
  }
}
