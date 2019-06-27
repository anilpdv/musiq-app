import React, { useState } from 'react';
import { css } from '@emotion/core';
import Entities from 'html-entities';
import { useSpring, animated } from 'react-spring';
import { BounceLoader } from 'react-spinners';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';
import { defaultOptions } from '../musicPlayer/musicPlayer.component';

import './Song.component.css';
const entities = new Entities.XmlEntities();

function removeb(query) {
  query = entities.decode(query);
  query = query.split('-');

  let author = query[0].split('|')[0];
  let title = query[1]
    ? query[1]
        .replace(/\(.*?\)/g, '')
        .replace(/\[.*?\]/g, '')
        .split('|')[0]
    : '';
  return { author, title };
}

export function transformPlayable(items) {
  let ids = [];
  let songs = items.map(item => {
    const { author, title } = removeb(item.snippet.title);
    ids.push(item.id.videoId);
    return {
      name: title,
      singer: author,
      cover: item.snippet.thumbnails.default.url,
      musicSrc: `http://localhost:4000/api/download/${
        item.id.videoId
      }/song/${title}`
    };
  });
  console.log('tansform songs', songs);
  songs = songs.filter(item => item.name !== '');
  return songs;
}

const override = css`
   {
    top: 10px;
    left: 10px;
  }
`;

function Song(props) {
  let songs = [];
  let spin = true;
  const [icon, setIcon] = useState(false);
  if (props.relatedSongs.items) {
    songs = transformPlayable(props.relatedSongs.items);
  }
  const changeIcon = () => {
    setIcon(!icon);
  };

  const contentProps = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });

  const { author, title } = removeb(props.song.snippet.title);
  const song = {
    name: title,
    singer: author,
    cover: props.song.snippet.thumbnails.default.url,
    musicSrc: `http://localhost:4000/api/download/${
      props.song.id.videoId
    }/song/${title.trim()}`
  };
  songs.unshift(song);

  //dispatch({ type: 'ADD', song: song })
  return (
    <div className=" flex py-5 px-0   play p-10">
      <section
        className="flex"
        id="fja"
        href="#"
        onClick={() => {
          props.getPlayingSong(song, props.song.id.videoId);
        }}
      >
        {' '}
        {props.iPlayable ? (
          <>
            <i className="mr-4">
              <BounceLoader
                css={override}
                sizeUnit={'px'}
                size={24}
                color={'#22BD4F'}
                loading={spin}
              />
            </i>
          </>
        ) : icon ? (
          <animated.i
            style={contentProps}
            className="fas fa-play text-white w-4"
          />
        ) : (
          <i className="fas fa-music text-white w-4" />
        )}
        <p
          className="song-title text-white pl-16  "
          onMouseOver={changeIcon}
          onMouseLeave={changeIcon}
        >
          {title} - {author}
        </p>
      </section>
      {props.iPlayable ? (
        songs.length > 1 ? (
          <ReactJkMusicPlayer {...defaultOptions} audioLists={songs} />
        ) : (
          <ReactJkMusicPlayer
            className="music-player"
            {...defaultOptions}
            audioLists={[song]}
          />
        )
      ) : (
        ''
      )}
    </div>
  );
}
export default Song;
