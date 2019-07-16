import React, { useState } from 'react';

import './library.component.css';
import { useStore } from 'easy-peasy';
import QueueItem from '../QueueItem/QueueItem.component';
import LinksToLibrary from '../LinksToLibrary/LinksToLibrary.component';

function Library(props) {
  const favourites = useStore(store => store.favourites);

  return (
    <div className="Library">
      <LinksToLibrary />
      <div className="Library-container">
        <div className="liked-songs">
          {favourites.map(song => {
            return <QueueItem song={song} />;
          })}
        </div>
      </div>
    </div>
  );
}
export default Library;
