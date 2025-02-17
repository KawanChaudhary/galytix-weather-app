import React from "react";

interface SortingDropdownProps {
  onSortChange: (order: string) => void;
}

const SortingDropdown: React.FC<SortingDropdownProps> = ({ onSortChange }) => {
  return (
    <div className="mb-3 d-flex align-items-center">
      <label className="me-2"><strong>Sort by Name:</strong></label>
      <select
        className="form-select"
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="default">Default</option>
        <option value="asc">A → Z</option>
        <option value="desc">Z → A</option>
      </select>
    </div>
  );
};

export default SortingDropdown;
