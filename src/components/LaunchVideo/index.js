import React from 'react';
import "./index.css";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const LaunchVideo = ({embedId}) => {
  return (
    <div className='youtube_video'>
      <LiteYouTubeEmbed 
      id={`${embedId}`}
      />
    </div>
  )
}

export default LaunchVideo;