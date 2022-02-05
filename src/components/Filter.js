import React from "react";

function Filter({ search, onCategoryChange, onSearchChange }) { 
  //take in current State of search to render to page (search)
  //take in search setter (onSearchChange), so that when it fires, the State of search can be reset 
  //take in category setter (onCategoryChange), so that onChange, the category State gets set
  
  function handleSearchChange(event) {
    onSearchChange(event.target.value)
  }

  //value = current State of search
  return (
    <div className="Filter">
      <input 
        type="text" 
        name="search" 
        placeholder="Search..." 
        value={search}
        onChange={handleSearchChange}
      />
      
      <select name="filter" onChange={onCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
