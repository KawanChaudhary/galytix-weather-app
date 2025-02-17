import React from 'react';

interface WeatherCardProps {
  temperature: number;
  precipitation: string;
  wind: number;
  unit: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ temperature, precipitation, wind, unit }) => {
  const temperatureUnit = unit === 'metric' ? '°C' : '°F';
  const windUnit = unit === 'metric' ? 'm/s' : 'mph';

  return (
    <div className="card p-3 mb-3">
      <h3 className="card-title">Weather Details</h3>
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
  );
};

export default WeatherCard;
