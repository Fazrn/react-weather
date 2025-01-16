import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <>
        <span className="temperature ms-2">{Math.round(props.celsius)}</span>
        <span className="unit ms-1">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </>
    );
  } else {
    return (
      <>
        <span className="temperature ms-2">
          {Math.round(convertToFahrenheit(props.celsius))}
        </span>
        <span className="unit ms-1">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </>
    );
  }
}
