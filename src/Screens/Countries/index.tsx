import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../api";
import { REST_COUNTRIES_URL } from "../../endpoints";
import { Country } from "../../types";
import {
  CountryCard,
  CountriesTable,
  ModeToggle,
  PaginationComponent,
  SearchBar,
  SortingByName,
  WithLoader,
} from "../../components";

const fetchCountries = async () => {
  const { data } = await axiosInstance.get(REST_COUNTRIES_URL);
  return data;
};

const Countries: React.FC = () => {
  const { data: countries = [], isPending: isLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  });

  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isTableMode, setIsTableMode] = useState(true);
  const [sortOrder, setSortOrder] = useState("default");

  const countriesPerPage = 12;

  const filteredCountries = countries
    .filter((country:Country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "asc") return a.name.common.localeCompare(b.name.common);
      if (sortOrder === "desc") return b.name.common.localeCompare(a.name.common);
      return 0;
    });

  const indexOfLast = currentPage * countriesPerPage;
  const indexOfFirst = indexOfLast - countriesPerPage;
  const currentCountries = filteredCountries.slice(indexOfFirst, indexOfLast);

  const handleViewWeather = (country:Country) => {
    navigate('/weather/country', { state: { country: country } });
  }

  return (
    <WithLoader isLoading={isLoading}>
      <div className="container">
        <h2 className="mb-3">World Countries</h2>
        <div className="row g-3 mb-3 align-items-center">
          <div className="col-12 col-md-4">
            <SearchBar onSearch={setSearch} />
          </div>
          <div className="col-12 col-md-4">
            <ModeToggle isFirstValue={isTableMode} value1="Table" value2="Card" onToggle={() => setIsTableMode((prev) => !prev)} />
          </div>
          <div className="col-12 col-md-4">
            <SortingByName onSortChange={setSortOrder} />
          </div>
        </div>
        {isTableMode ? (
          <CountriesTable countries={currentCountries} handleViewWeather={handleViewWeather} />
        ) : (
          <div className="row">
            {currentCountries.map((country:Country, index:number) => (
              <CountryCard key={index} country={country} handleViewWeather={handleViewWeather} />
            ))}
          </div>
        )}

        <PaginationComponent
          currentPage={currentPage}
          totalItems={filteredCountries.length}
          itemsPerPage={countriesPerPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </WithLoader>
  );
};

export default Countries;
