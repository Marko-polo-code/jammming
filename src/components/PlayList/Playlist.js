import React from 'react';
import './Playlist.css';
import Tracklist from '../TrackList/Tracklist';

function Playlist(props) {

 const handleNameChange = (event) => {
    props.onNameChange(event.target.value);
  }

  return (
    <div className="Playlist">
      <input defaultValue={'New Playlist'} onChange={handleNameChange} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
      <Tracklist tracks={props.playlistTracks} onRemove={props.onRemove} isRemoval={true} />
    </div>
  );
}

export default Playlist;
