import React, { useState } from "react";
import axios from "axios";

export default function Input() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");
  function showWeatherData(response) {
    setWeather({
      city: response.data.name,
      temp: Math.round(response.data.main.temp),
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "9feaf93d48daeaeeb2d9ea551226a8c4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeatherData);
  }
  function handleChange(event) {
    setCity(event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter a city ..."
          type="text"
          onChange={handleChange}
        />
        <input type="submit" value="Search" />
      </form>
      <ul>
        <li>{weather.city}</li>
        <li>{weather.temp}</li>
      </ul>
    </div>
  );
}
