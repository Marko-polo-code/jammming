import React from 'react';
import './Track.css';

function Track(props) {

  const addTrack = () => {
    props.onAdd(props.track);
  }

  return (
    <div className="Track" onClick={addTrack}>
      <div className="Track-information">
        <h3>{props.track.name}</h3>
        <p>{props.track.artist} | {props.track.album}</p>
      </div>
      <button className="Track-action">+</button>
    </div>
  );
}

export default Track;
