import React, { useState, useEffect } from "react";
import Weather from "./Weather";

const apiKey = "c1d7db6fd0964748bf6121505231104";

const FetchData = () => {
  const [weather, setWeather] = useState({});
  const [state, setState] = useState("Abuja");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${state}`;
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data);
        setWeather({ current: data.current, location: data.location });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [state]);

  const handleChange = (event) => {
    setState(event.target.value);
  };
  return (
    <section>
      <div>
        <label htmlFor="state">Select State: </label>
        <select name="state" id="state" value={state} onChange={handleChange}>
          <option value="Abia">Abia</option>
          <option value="Abuja">Abuja</option>
          <option value="Adamawa">Adamawa</option>
          <option value="Akwa Ibom">Akwa Ibom</option>
          <option value="Anambra">Anambra</option>
          <option value="Bauchi">Bauchi</option>
          <option value="Bayelsa">Bayelsa</option>
          <option value="Benue">Benue</option>
          <option value="Borno">Borno</option>
          <option value="Cross River">Cross River</option>
          <option value="Delta">Delta</option>
          <option value="Ebonyi">Ebonyi</option>
          <option value="Edo">Edo</option>
          <option value="Ekiti">Ekiti</option>
          <option value="Enugu">Enugu</option>
          <option value="Gombe">Gombe</option>
          <option value="Imo">Imo</option>
          <option value="Jigawa">Jigawa</option>
          <option value="Kaduna">Kaduna</option>
          <option value="Kano">Kano</option>
          <option value="Katsina">Katsina</option>
          <option value="Kebbi">Kebbi</option>
          <option value="Kogi">Kogi</option>
          <option value="Kwara">Kwara</option>
          <option value="Lagos">Lagos</option>
          <option value="Nasarawa">Nasarawa</option>
          <option value="Niger">Niger</option>
          <option value="Ogun">Ogun</option>
          <option value="Ondo">Ondo</option>
          <option value="Osun">Osun</option>
          <option value="Oyo">Oyo</option>
          <option value="Plateau">Plateau</option>
          <option value="Rivers">Rivers</option>
          <option value="Sokoto">Sokoto</option>
          <option value="Taraba">Taraba</option>
          <option value="Yobe">Yobe</option>
          <option value="Zamfara">Zamfara</option>
        </select>
      </div>
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
