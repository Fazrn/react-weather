import React from "react";

export default function WeatherTemperature(props) {
  return (
    <>
      <span className="temperature ms-2">{Math.round(props.celsius)}</span>
      <span className="unit ms-1">°C</span>
    </>
  );
}
