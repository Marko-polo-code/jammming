import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../PlayList/Playlist';
import './App.css';

function App() {

  const [searchResults, setSearchResults] = useState([
    {name: 'name1', artist: 'artist1', album: 'album1', id: 1},
    {name: 'name2', artist: 'artist2', album: 'album2', id: 2},
    {name: 'name3', artist: 'artist3', album: 'album3', id: 3}
  ]);

  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([
    {name: 'playlistName1', artist: 'playlistArtist1', album: 'playlistAlbum1', id: 4},
    {name: 'playlistName2', artist: 'playlistArtist2', album: 'playlistAlbum2', id: 5},
    {name: 'playlistName3', artist: 'playlistArtist3', album: 'playlistAlbum3', id: 6}
  ]);

   const addTrack = track => {
    if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    setPlaylistTracks([...playlistTracks, track]);
  };

  const removeTrack = track => {
    setPlaylistTracks(playlistTracks.filter(savedTrack => savedTrack.id !== track.id));
  };

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
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
        <Playlist
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          onRemove={removeTrack} />
      </div>
    </div>
  );
}

export default App;
