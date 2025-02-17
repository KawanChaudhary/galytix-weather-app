import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../api";
import { REST_WEATHER_URL } from "../../endpoints";
import { ModeToggle, WeatherCard, MoonPhase, WithLoader } from "../../components";

const fetchWeather = async (lat: number, lang: number, unit: string) => {
  const url = `${REST_WEATHER_URL}?lat=${lat}&lon=${lang}&appid=794ee95e63c5a32aaf88cd813fa2e425&units=${unit}`;
  const { data } = await axiosInstance.get(url);
  return data;
};

const WeatherPage: React.FC = () => {
  const location = useLocation();
  const country = location.state?.country
  const [unit, setUnit] = useState("metric");
  const [showMap, setShowMap] = useState(false);

  const { data: weatherData, isPending: isLoading } = useQuery({
    queryKey: ["weather", country.latlng[0], country.latlng[1], unit],
    queryFn: () => fetchWeather(country.latlng[0], country.latlng[1], unit),
  });
  
  console.log(country, weatherData);
  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === "metric" ? "imperial" : "metric"));
  };

  useEffect(() => {
    // Add logic for showing map or weather details based on user actions
  }, [showMap]);

  return (
    <WithLoader isLoading={isLoading}>
      {/* <div className="container"> */}
        <h2 className="mb-3">{country.name.common} - {country.capital}</h2>

        <div className="row g-3 mb-3 align-items-center">
          <div className="col-12 col-md-4">
            <ModeToggle isFirstValue={unit === "metric"} value1="metric" value2="imperial" onToggle={toggleUnit} />
          </div>
        </div>

        {weatherData && (
          <div className="row">
            <WeatherCard
              temperature={weatherData.main.temp}
              precipitation={weatherData.weather[0].description}
              wind={weatherData.wind.speed}
              unit={unit}
            />
          </div>
        )}

        {showMap && (
          <div className="row">
            <div className="col">
              {/* Add a map here using a library like React-Leaflet or Google Maps */}
            </div>
          </div>
        )}

        <div className="row">
          <div className="col">
            <MoonPhase timestamp={weatherData?.dt} />
          </div>
        </div>
      {/* </div> */}
    </WithLoader>
  );
};

export default WeatherPage;
