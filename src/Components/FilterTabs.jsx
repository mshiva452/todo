import React from "react";

const FilterTabs = () => {
  const handleFilter = () => {};
  return (
    <ul className="filter-tasks" onClick={handleFilter}>
      <li>All Tasks</li>
      <li>Completed</li>
      <li>Pending</li>
    </ul>
  );
};

export default FilterTabs;
