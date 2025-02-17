// import React from "react";
// import { useParams } from "react-router-dom";
// import { useQuery } from "react-query";
// import axios from "axios";
// import { WEATHER_API } from "../../endpoints";
// import withLoader from "../components/LoaderHOC";

// const fetchWeather = async ({ queryKey }) => {
//   const [_, capital, countryCode] = queryKey;
//   const API_KEY = "794ee95e63c5a32aaf88cd813fa2e425";
//   const { data } = await axios.get(WEATHER_API(capital, countryCode, API_KEY));
//   return data;
// };

// const Weather = ({ isLoading }) => {
//   const { capital, countryCode } = useParams();
//   const { data: weather } = useQuery(["weather", capital, countryCode], fetchWeather);

//   return (
//     <div>
//       <h2>Weather in {capital}</h2>
//       <p>Temperature: {weather.main.temp}°C</p>
//       <p>Wind Speed: {weather.wind.speed} m/s</p>
//       <p>Humidity: {weather.main.humidity}%</p>
//     </div>
//   );
// };

// export default withLoader(Weather);