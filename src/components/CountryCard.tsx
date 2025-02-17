import React from "react";
import { useNavigate } from "react-router-dom";
import { Country } from "../types";

interface CardCountryProp {
  country: Country;
}

const CountryCard: React.FC<CardCountryProp> = ({ country }) => {
  const navigate = useNavigate();

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-2">
      <div
        className="card text-center shadow-md p-2"
        style={{
          width: "280px",
          height: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          src={country.flags.png}
          alt="flag"
          className="card-img-top"
          style={{
            width: "100%",
            height:'150px',
            objectFit: "cover",
            borderRadius: "5px",
          }}
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title">{country.name.common}</h5>
            <p className="card-text">
              <strong>Capital:</strong> {country.capital}
            </p>
            <p className="card-text">
              <strong>Region:</strong> {country.region}
            </p>
          </div>
          <button
            className="btn btn-outline-danger mt-auto"
            onClick={() =>
              navigate(`/weather/${country.capital}/${country.cca2}`)
            }
          >
            View Weather
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
