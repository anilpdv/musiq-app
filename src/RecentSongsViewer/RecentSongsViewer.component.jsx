import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RecentSongsViewer.component.css';
import { useStore } from 'easy-peasy';
import QueueItem from '../QueueItem/QueueItem.component';
import LinksToLibrary from '../LinksToLibrary/LinksToLibrary.component';

function RecentSongsViewer() {
  const recentSongs = useStore(store => store.recentSongs);
  return (
    <div className="RecentSongsViewer">
      <LinksToLibrary />
      <div className="RecentSongs">
        {recentSongs.map(song => {
          return <QueueItem song={{ name: song.name, singer: song.author }} />;
        })}
      </div>
    </div>
  );
}

export default RecentSongsViewer;
