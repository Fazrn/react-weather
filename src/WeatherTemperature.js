import React from "react";

export default function WeatherTemperature(props) {
  return (
    <>
      <span className="temperature ">{Math.round(props.celsius)}</span>
      <span className="unit ms-1">°C</span>
    </>
  );
}
