import React from 'react';
import ReactPlayer from 'react-player';
import './ReactPlayerWrapper.css';

// https://stackoverflow.com/questions/49393838/how-to-make-reactplayer-scale-with-height-and-width
const ReactPlayerWrapper = (props) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        playing
        width="100%"
        height="100%"
        controls={false}
        {...props}
      />
    </div>
  );
};

export default ReactPlayerWrapper;
