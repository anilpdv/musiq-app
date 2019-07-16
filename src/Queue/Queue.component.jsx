import React, { useState } from 'react';
import QueueItem from '../QueueItem/QueueItem.component';
import './Queue.component.css';
import { useStore } from 'easy-peasy';

function Queue() {
  const audioLists = useStore(state => state.audioLists);

  return (
    <div className="Queue">
      <div className="Queue-heading">
        <h1>Play Queue</h1>
      </div>
      <div className="Queue-playing-song">
        <div className="Queue-playing-song-heading">Now Playing</div>
        <QueueItem song={audioLists[0]} />
      </div>

      <div className="Queue-next-songs">
        <div className="Queue-next-songs-heading">Next Up</div>
        <div className="Queue-next-songs">
          {audioLists.slice(1).map(song => {
            return <QueueItem song={song} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Queue;
