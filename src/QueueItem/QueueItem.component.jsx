import React, { useState } from 'react';

import './QueueItem.component.css';
import { useStore, useActions } from 'easy-peasy';

function QueueItem(props) {
  const fetchSongs = useActions(actions => actions.fetchSongs);
  const [icon, setIcon] = useState(false);
  const changeIcon = () => {
    setIcon(!icon);
  };

  return (
    <div className="QueueItem-song-details">
      {icon ? (
        <i className="fal fa-play text-gray-200 " />
      ) : (
        <i className="fal fa-music text-gray-100 " />
      )}

      <div className="QueueItem-content">
        <h4
          className="QueueItem-song-title"
          onClick={() => fetchSongs({ song: props.song, id: props.song.id })}
          onMouseOver={changeIcon}
          onMouseLeave={changeIcon}
        >
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
