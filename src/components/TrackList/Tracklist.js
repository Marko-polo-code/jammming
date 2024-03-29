import React from 'react';
import Track from '../Track/Track';
import './Tracklist.css';

function Tracklist() {
  return (
    <div className="TrackList">
      {/* <!-- You will add a map method that renders a set of Track components  --> */}
      <Track />
    </div>
  );
}

export default Tracklist;
