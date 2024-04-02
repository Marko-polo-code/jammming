import React from 'react';
import './SearchResults.css';
import Tracklist from '../TrackList/Tracklist';

function SearchResults(props) {

  return (
    <div className="SearchResults">
      <h2>Results</h2>
      {/* <!-- Add a TrackList component --> */}
      <Tracklist
        tracks={props.searchResults}
        onAdd={props.onAdd}
        isRemoval={false}
        />
    </div>
  );
}

export default SearchResults;
