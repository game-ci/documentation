import React from 'react';
import ReactPlayer from 'react-player';

// TODO: https://stackoverflow.com/questions/49393838/how-to-make-reactplayer-scale-with-height-and-width
const Video = (props) => {
  return <ReactPlayer width="100%" height="500px" {...props} />;
};

export default Video;
