import React, { useState, useContext, useEffect } from 'react';
import ShowCage from '../ShowCage/ShowCage.component';
import './Playlist.component.css';
import { transformPlaylistPlayable } from '../utils/helper';
import Axios from 'axios';
import { useActions } from 'easy-peasy';

const defaultSongs = [
  {
    name: ' Dancing With A Stra',
    singer: 'Sam Smith,',
    img: 'http://img.youtube.com/vi/av5JD1dfj_c/sddefault.jpg',
    src: 'https://musiq-app-0396.appspot.com/api/listen/av5JD1dfj_c'
  },
  {
    name: ' Contra La Pared',
    singer: 'Sean Paul,',
    img: 'http://img.youtube.com/vi/-gCe4WrmOIk/sddefault.jpg',
    src: 'https://musiq-app-0396.appspot.com/api/listen/-gCe4WrmOIk'
  },
  {
    name: ' 365 ',
    singer: 'Zedd, Katy',
    img: 'http://img.youtube.com/vi/YrbgUtCfnC0/sddefault.jpg',
    src: 'https://musiq-app-0396.appspot.com/api/listen/YrbgUtCfnC0'
  },
  {
    name: ' Sucker ',
    singer: 'Jonas Brot',
    img: 'http://img.youtube.com/vi/yG60iRJwmfA/sddefault.jpg',
    src: 'https://musiq-app-0396.appspot.com/api/listen/yG60iRJwmfA'
  },
  {
    name: ' In My Blood',
    singer: 'Shawn Mend',
    img: 'http://img.youtube.com/vi/36tggrpRoTI/sddefault.jpg',
    src: 'https://musiq-app-0396.appspot.com/api/listen/36tggrpRoTI'
  },
  {
    name: " Don't Call Me Up",
    singer: 'Mabel ',
    img: 'http://img.youtube.com/vi/9TQKyDD9Yig/sddefault.jpg',
    src: 'https://musiq-app-0396.appspot.com/api/listen/9TQKyDD9Yig'
  }
];

function Playlist(props) {
  const [playlist, setPlaylist] = useState([]);
  const handlePlaylist = async playlistId => {
    const resp = await Axios.get(
      'https://musiq-app-0396.appspot.com/api/playlist/' + playlistId
    );

    setPlaylist(resp.data.playlist);
  };

  useEffect(() => {}, []);

  let songs;
  if (playlist) {
    songs = transformPlaylistPlayable(playlist);
  }

  return (
    <div>
      <div>
        <ShowCage handlePlaylist={handlePlaylist} songs={songs} />
      </div>
    </div>
  );
}

export default Playlist;
