import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    setLoaded(true);
    setForecastData(response.data.list); // Use `list` instead of `daily`
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  if (loaded) {
    // Group forecast data by day
    const dailyForecast = {};
    forecastData.forEach((item) => {
      const date = new Date(item.dt * 1000).toLocaleDateString(); // Get the date (e.g., "10/25/2023")
      if (!dailyForecast[date]) {
        dailyForecast[date] = {
          temps: [],
          icons: [],
          descriptions: [],
        };
      }
      dailyForecast[date].temps.push(item.main.temp);
      dailyForecast[date].icons.push(item.weather[0].icon);
      dailyForecast[date].descriptions.push(item.weather[0].description);
    });

    // Generate HTML for the next 5 days
    let dayCount = 0;
    return (
      <div className="weatherForecast">
        <div className="row">
          {Object.keys(dailyForecast).map((date) => {
            if (dayCount >= 5) return null; // Limit to 5 days
            dayCount++;

            const dayData = dailyForecast[date];
            const maxTemp = Math.round(Math.max(...dayData.temps));
            const minTemp = Math.round(Math.min(...dayData.temps));
            const icon = dayData.icons[0]; // Use the first icon of the day
            const description = dayData.descriptions[0]; // Use the first description of the day

            return (
              <div className="col" key={date}>
                <WeatherForecastDay
                  data={{
                    dt: new Date(date).getTime() / 1000,
                    temp: { max: maxTemp, min: minTemp },
                    weather: [{ icon, description }],
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "9feaf93d48daeaeeb2d9ea551226a8c4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
