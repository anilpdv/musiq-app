import React, { useState } from 'react';

import './PlaylistViewer.component.css';

function PlaylistViewer(props) {
  return (
    <div className="ShowCage-playlist shadow-lg">
      <div
        className="ShowCage-playlist-content"
        style={{
          backgroundImage: 'url(' + props.img + ')'
        }}
      />
      <div
        className="ShowCage-playlist-hover-content"
        onClick={() => props.handlePlaylist(props.playlistId)}
      >
        <svg
          xmlns="https://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          style={{ fill: '#eeeeee' }}
        >
          {' '}
          <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18.042,36.034l-0.083-21.996L37,24.964 L18.042,36.034z" />
        </svg>
      </div>
    </div>
  );
}

export default PlaylistViewer;
