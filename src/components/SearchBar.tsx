import React from "react";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by country name"
      className="form-control mb-3"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
