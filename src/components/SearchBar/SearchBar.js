import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const search = () => {
    props.onSearch(searchTerm);
  }

  const handleSearchTermChange = event => {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" onChange={handleSearchTermChange} />
      <button className="App-searchButton" onClick={search}>SEARCH</button>
    </div>
  );
}

export default SearchBar;
