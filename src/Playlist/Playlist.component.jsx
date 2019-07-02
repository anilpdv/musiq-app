import React, { useState } from 'react';
import ShowCage from '../ShowCage/ShowCage.component';
import './Playlist.component.css';
import { transformPlaylistPlayable } from '../utils/helper';
import Axios from 'axios';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';
import { defaultOptions } from '../musicPlayer/musicPlayer.component';

function Playlist() {
  const [playlist, setPlaylist] = useState([]);
  const handlePlaylist = async playlistId => {
    const resp = await Axios.get(
      'https://warm-springs-86808.herokuapp.com/api/playlist/' + playlistId
    );

    setPlaylist(resp.data.playlist);
  };
  let songs;
  if (playlist) {
    songs = transformPlaylistPlayable(playlist);
  }

  return (
    <div>
      <div>
        <ShowCage handlePlaylist={handlePlaylist} />
      </div>
      {playlist.length > 1 ? (
        <ReactJkMusicPlayer {...defaultOptions} audioLists={songs} />
      ) : (
        ''
      )}
    </div>
  );
}

export default Playlist;
