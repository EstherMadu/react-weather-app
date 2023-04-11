import React from "react";
//import FetchData from "./Data";
const Weather = ({
  name,
  region,
  icon,
  text,
  temp_c,
  temp_f,
  country,
  localtime,
}) => {
  return (
    <div className="card">
      <h2>Weather App</h2>
      <h3>
        {name}, {region}, {country}
      </h3>
      <img src={icon} alt={text} />
      <p>{text}</p>
      <p>
        Temperature: {temp_c}°C / {temp_f}°F
      </p>
      <p>Local Time: {localtime}</p>
    </div>
  );
};

export default Weather;
