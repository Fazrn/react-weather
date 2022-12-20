import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return fahrenheit;
  }

  if (unit === "celsius") {
    return (
      <>
        <span className="temperature ">{Math.round(props.celsius)}</span>
        <span className="unit ms-1">
          °C|
          <a href="#" onClick={showFahrenheit} className="text-decoration-none">
            °F
          </a>{" "}
        </span>
      </>
    );
  } else {
    return (
      <>
        <span className="temperature ">{Math.round(fahrenheit())}</span>
        <span className="unit ms-1">
          <a onClick={showCelsius} className="text-decoration-none">
            °C
          </a>
          |°F
        </span>
      </>
    );
  }
}
