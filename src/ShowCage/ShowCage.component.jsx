import React, { useState, useEffect } from 'react';
import { useStore, useActions } from 'easy-peasy';
import TopSongs from '../assets/TOP.jpeg';
import NewSongs from '../assets/NewSongs.jpeg';
import Trending from '../assets/Trending.jpeg';
import TOPUS from '../assets/TOPUS.jpg';
import TOPUK from '../assets/TOPUK.jpg';
import TOPCANADA from '../assets/TOPCANADA.jpg';

import './ShowCage.component.css';
import PlaylistViewer from '../PlaylistViewer/PlaylistViewer.component';
import ShowcageLinks from '../ShowcageLinks/ShowcageLinks.component';

function ShowCage(props) {
  const fetchPlaylist = useActions(actions => actions.fetchPlaylist);
  const recentSongs = useStore(state => state.recentSongs);
  useEffect(() => {
    console.log('recent showcage', recentSongs);
  }, []);
  return (
    <div className="ShowCage ">
      <div className="ShowCage-container">
        <ShowcageLinks />
        <div className=" ShowCage-recommend">
          <div className="ShowCage-playlists-title">
            <h1>Recommended for you </h1>
          </div>

          <div className=" flex ShowCage-playlists">
            {/* adding playlist*/}
            <PlaylistViewer
              img={TopSongs}
              playlistId="PL4fGSI1pDJn69On1f-8NAvX_CYlx7QyZc"
            />

            <PlaylistViewer
              img={NewSongs}
              playlistId="PL4fGSI1pDJn69On1f-8NAvX_CYlx7QyZc"
            />

            <PlaylistViewer img={Trending} playlist="fjalfj" />
          </div>
        </div>

        <div className="ShowCage-recentlyPlayed">
          <div className="ShowCage-recentlyPlayed-title">
            <h1>Recently Played</h1>
          </div>
          <div className="ShowCage-recentlyPlayed-lists">
            {recentSongs.slice(0, 7).map(song => {
              return (
                <div className="ShowCage-recentlyPlayed-item">
                  <div className="ShowCage-recentlyPlayed-item-container">
                    <div
                      className="ShowCage-recent-image rounded-full"
                      style={{
                        backgroundImage: `url(
                          https://i.ytimg.com/vi/${song.id}/hqdefault.jpg
                        )`
                      }}
                    />
                    <p className="ShowCage-recentlyPlayed-item-name">
                      {song.name}
                    </p>
                  </div>
                  <div
                    className="ShowCage-recent-hover-content"
                    onClick={() => props.handlePlaylist('id')}
                  >
                    <svg
                      xmlns="https://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      style={{ fill: '#eeeeee' }}
                    >
                      {' '}
                      <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18.042,36.034l-0.083-21.996L37,24.964 L18.042,36.034z" />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="ShowCage-Charts">
          <div className="ShowCage-playlists-title">
            <h1>Charts</h1>
          </div>

          <div className=" flex ShowCage-playlists">
            {/* adding playlist*/}
            <PlaylistViewer
              img={TOPUS}
              playlistId="PL4fGSI1pDJn69On1f-8NAvX_CYlx7QyZc"
            />

            <PlaylistViewer
              img={TOPUK}
              playlistId="PL4fGSI1pDJn69On1f-8NAvX_CYlx7QyZc"
            />

            <PlaylistViewer img={TOPCANADA} playlist="fjalfj" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowCage;
