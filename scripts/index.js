import React from 'react';
import {render} from 'react-dom';
import ReactVideoPlayer from './components/react-video-player';

render(
  <ReactVideoPlayer width="400" autoplay loop />,
  document.getElementById('root')
);
