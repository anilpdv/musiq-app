import React, { useState, useContext } from 'react';
import { css } from '@emotion/core';
import { useSpring, animated } from 'react-spring';
import { BounceLoader } from 'react-spinners';
import { lrtrim, removeb } from '../utils/helper';
import './Song.component.css';
import { useActions } from 'easy-peasy';

const override = css`
   {
    top: 10px;
    left: 10px;
  }
`;

function Song(props) {
  let spin = true;
  const [icon, setIcon] = useState(false);
  const [downloadIcon, setDownloadIcon] = useState(false);
  const addSongsToLocalStorage = useActions(
    actions => actions.addSongsToLocalStorage
  );
  const fetchSongs = useActions(actions => actions.fetchSongs);

  const changeIcon = () => {
    setIcon(!icon);
  };

  const toggleDownloadIcon = () => {
    setDownloadIcon(!downloadIcon);
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
    id: props.song.id.videoId,
    name: title,
    singer: author,
    img: props.song.snippet.thumbnails.default.url,
    src: `https://musiq-app-0396.appspot.com/api/listen/${
      props.song.id.videoId
    }`
  };

  return (
    <div className="Song py-5 px-0   play ">
      <div className="flex" id="fja" href="#">
        {' '}
        {props.iPlayable ? (
          <>
            <i className="mr-2">
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
            className="fas fa-play text-gray-200 "
          />
        ) : (
          <i className="fas fa-music text-gray-100 " />
        )}
        <p
          className="song-title text-white pl-5"
          onClick={() => {
            fetchSongs({ id: props.song.id.videoId, song });
            addSongsToLocalStorage([
              {
                songId: props.song.id.videoId,
                author: author,
                content: 'song',
                backgroundImg: '',
                name: title
              }
            ]);
          }}
          onMouseOver={changeIcon}
          onMouseLeave={changeIcon}
        >
          {title}{' '}
        </p>
        <a
          href={`https://musiq-app-0396.appspot.com/api/download/${
            props.song.id.videoId
          }/song/${lrtrim(title)}`}
          download
        >
          <i
            className={
              downloadIcon
                ? 'fas fa-arrow-alt-circle-down text-gray-300'
                : 'fas fa-arrow-alt-circle-down text-gray-600'
            }
            onMouseOver={toggleDownloadIcon}
            onMouseLeave={toggleDownloadIcon}
          />
        </a>
      </div>
      <div className="Song-author ">
        <p className="text-gray-400">{author}</p>
      </div>
    </div>
  );
}
export default Song;
