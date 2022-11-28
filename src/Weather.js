import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              placeholder="Enter a city ..."
              type="search"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-3">
          <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" />
          <span>12°C</span>
        </div>
        <div className="col-5">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 35%</li>
            <li>Wind: 8 km/h</li>
          </ul>
        </div>
        <div className="col-4">
          <h1>Tehran</h1>
          <ul>
            <li>Monday 7:00 pm</li>
            <li>Mostly cloudy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
