import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/PlayList/Playlist';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammming</h1>
      </header>
      <div className="App-search">
        <SearchBar />
        <button className="App-searchButton">SEARCH</button>
      </div>
      <div className="App-playlist">
        <SearchResults />
        <Playlist />
      </div>
    </div>
  );
}

export default App;
