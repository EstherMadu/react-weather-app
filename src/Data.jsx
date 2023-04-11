import React, { useState, useEffect } from "react";
import Weather from "./Weather";

const apiKey = "c1d7db6fd0964748bf6121505231104";
const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Nigeria`;

const FetchData = () => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data);
        setWeather({ current: data.current, location: data.location });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  console.log(weather);
  return (
    <section>
      {Object.keys(weather).length > 0 && (
        <Weather
          name={weather.location.name}
          region={weather.location.region}
          country={weather.location.country}
          localtime={weather.location.localtime}
          icon={weather.current.condition.icon}
          text={weather.current.condition.text}
          temp_c={weather.current.temp_c}
          temp_f={weather.current.temp_f}
        />
      )}
    </section>
  );
};

export default FetchData;
