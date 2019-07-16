import React, { useState } from 'react';

import './QueueItem.component.css';

function QueueItem(props) {
  return (
    <div className="QueueItem-song-details">
      <i className="fal fa-music" />
      <div className="QueueItem-content">
        <h4 className="QueueItem-song-title">
          {props.song ? props.song.name : ''}{' '}
        </h4>
        <p className="QueueItem-song-author">
          {props.song ? props.song.singer : ''}
        </p>
      </div>
      <i className="fal fa-arrow-alt-circle-down " />
    </div>
  );
}

export default QueueItem;
