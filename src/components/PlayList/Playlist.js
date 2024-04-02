import React from 'react';
import './Playlist.css';
import Tracklist from '../TrackList/Tracklist';

function Playlist(props) {
  return (
    <div className="Playlist">
      <input defaultValue={'New Playlist'} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
      <Tracklist tracks={props.playlistTracks} />
    </div>
  );
}

export default Playlist;
