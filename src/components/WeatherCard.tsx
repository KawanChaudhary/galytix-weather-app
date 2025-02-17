import React from "react";

interface WeatherCardProps {
  temperature: number;
  precipitation: string;
  wind: number;
  unit: string;
  weatherIcon: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  temperature,
  precipitation,
  wind,
  unit,
  weatherIcon,
}) => {
  const temperatureUnit = unit === "metric" ? "°C" : "°F";
  const windUnit = unit === "metric" ? "m/s" : "mph";

  return (
    <div className="card p-3 mb-3 shadow-sm">
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <h5 className="card-title mb-2">Weather Details</h5>
          <div className="mb-2">
            <strong>Temperature:</strong> {temperature} {temperatureUnit}
          </div>
          <div className="mb-2">
            <strong>Precipitation:</strong> {precipitation}
          </div>
          <div className="mb-2">
            <strong>Wind Speed:</strong> {wind} {windUnit}
          </div>
        </div>
        <img
          src={weatherIcon}
          alt="Weather Icon"
          style={{ width: "120px", height: "120px", marginRight: "15px" }}
        />
      </div>
    </div>
  );
};

export default WeatherCard;
