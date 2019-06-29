import React, { useState, useEffect, Component } from 'react';
import Song from '../Song/Song.component';
import './SongsList.component.css';
import Axios from 'axios';
import { useTrail, useSpring } from 'react-spring';
import { defaultProps } from 'recompose';
import { animated } from 'react-spring';

function SongsList(props) {
  console.log('props', props);
  const [song, setSong] = useState({});

  const [relatedSongs, setRelatedSongs] = useState({});
  const [id, setId] = useState('');
  useEffect(() => {}, []);

  const getPlayingSong = async (song, id) => {
    const resp = await Axios.get(
      `https://warm-springs-86808.herokuapp.com/api/related/` + id
    );
    console.log('realted songs', resp.data);
    setRelatedSongs(resp.data);
    setSong(song);
    setId(id);
  };

  const trails = useTrail(props.songs.length, {
    from: {
      marginLeft: -10,
      opacity: 0,
      transform: 'translate3d(0,-40px0)'
    },
    to: { marginLeft: 10, opacity: 1, transform: 'translate3d(0,0px,0)' }
  });

  const contentProps = useSpring({
    from: {
      marginLeft: -10,
      opacity: 0,
      transform: 'translate3d(0,0px,0)'
    },
    to: { marginLeft: 10, opacity: 1, transform: 'translate3d(0,-40px0)' }
  });
  return (
    <>
      {props.songs[0] ? (
        <div className=" flex   h-full SongList-margin">
          <div>
            <div className="  SongList-image-container " />
            <img
              className="SongList-image shadow-lg"
              src={
                'http://img.youtube.com/vi/' +
                props.songs[0].id.videoId +
                '/maxresdefault.jpg'
              }
              alt=""
            />
          </div>
          <div className="song-list-titles  sm:w-3/4 lg:w-3/4">
            {trails.map((dprops, index) => (
              <animated.div key={props.songs[index].id.videoId} style={props}>
                <Song
                  song={props.songs[index]}
                  getPlayingSong={getPlayingSong}
                  iPlayable={
                    id === props.songs[index].id.videoId ? true : false
                  }
                  relatedSongs={relatedSongs}
                />
              </animated.div>
            ))}
          </div>
        </div>
      ) : (
        <p className="part-loading my-56"> loading...</p>
      )}
    </>
  );
}
const withDefaultProps = defaultProps({ songs: [] });
export default withDefaultProps(SongsList);
