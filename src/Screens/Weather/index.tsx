import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../api";
import { REST_WEATHER_URL } from "../../endpoints";
import { ModeToggle, WeatherCard, MoonPhase, WithLoader } from "../../components";
import sunnyIcon from "../../assets/sunny.png";

const fetchWeather = async (capital:string, unit: string) => {
  const url = `${REST_WEATHER_URL}?q=${capital}&appid=794ee95e63c5a32aaf88cd813fa2e425&units=${unit}`;
  const { data } = await axiosInstance.get(url);
  return data;
};

const WeatherPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const country = location.state?.country;
  const [unit, setUnit] = useState("metric");

  const { data: weatherData, isPending: isLoading } = useQuery({
    queryKey: ["weather", country.capital, unit],
    queryFn: () => fetchWeather(country.capital, unit),
  });

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === "metric" ? "imperial" : "metric"));
  };

  const goBack = () => {
    navigate(-1); 
  };

  const weatherIcon = weatherData?.weather[0]?.icon
    ? `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`
    : sunnyIcon;

  return (
    <WithLoader isLoading={isLoading}>
        <div className="row mb-3">
            <button onClick={goBack} className="btn btn-primary">
               Go Back
            </button>
        </div>

        <h2 className="mb-3 text-primary">
          {country.name.common} - {country.capital}
        </h2>
        <ModeToggle
          isFirstValue={unit === "metric"}
          value1="metric"
          value2="imperial"
          onToggle={toggleUnit}
        />

        {weatherData && (
          <div className="row mb-3">
            <div className="col-12 col-md-12">
              <WeatherCard
                temperature={weatherData.main.temp}
                precipitation={weatherData.weather[0].description}
                wind={weatherData.wind.speed}
                unit={unit}
                weatherIcon={weatherIcon}
              />
            </div>

            <div className="col-12 col-md-12">
              <MoonPhase timestamp={weatherData?.dt} />
            </div>
          </div>
        )}
    </WithLoader>
  );
};

export default WeatherPage;
