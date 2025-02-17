// /components/CountriesTable.tsx
import React from "react";
import { Country } from "../types";
import { useNavigate } from "react-router-dom";

interface CountriesTableProps {
  countries: Country[];
}

const CountriesTable: React.FC<CountriesTableProps> = ({ countries }) => {
  const navigate = useNavigate();

  return (
    <table className="table table-striped table-bordered table-hover" style={{ width: "100%", tableLayout: "fixed" }}>
      <thead>
        <tr>
          <th>Flag</th>
          <th>Name</th>
          <th>Capital</th>
          <th>Region</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((country, index) => (
          <tr key={index}>
            <td>
              <img src={country.flags.png} alt="flag" width="40" height="20" />
            </td>
            <td>{country.name.common}</td>
            <td>{country.capital}</td>
            <td>{country.region}</td>
            <td>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => navigate(`/weather/${country.capital}/${country.cca2}`)}
              >
                View Weather
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CountriesTable;
