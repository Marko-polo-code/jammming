import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  function handleSearchTermChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" onChange={handleSearchTermChange} />
    </div>
  );
}

export default SearchBar;
