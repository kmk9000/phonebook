import React from "react";
const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      search for name: <input value={filter} onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;
