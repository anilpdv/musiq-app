import React, { useState, useContext } from 'react';
import { RecentSongsContext } from '../context/RecentSongsContext';

import './ShowCage.component.css';
import Axios from 'axios';

function ShowCage(props) {
  const recentSongs = useContext(RecentSongsContext);
  return (
    <div className="ShowCage ">
      <div className="ShowCage-container">
        <div className=" ShowCage-recommend">
          <div className="ShowCage-playlists-title">
            <h1>Recommended for you </h1>
          </div>

          <div className=" flex ShowCage-playlists">
            {/* adding playlist*/}
            <div className="ShowCage-playlist shadow-lg">
              <div
                className="ShowCage-playlist-content"
                style={{
                  backgroundImage:
                    "url('https://images.8tracks.com/cover/i/012/571/621/cody-davis-253928-unsplash-2818.jpg?rect=864,0,3456,3456&q=98&fm=jpg&fit=max&w=300&h=300')"
                }}
              >
                <div className="ShowCage-playlist-title text-blue-200">
                  <span>New</span>

                  <span>Songs</span>
                </div>
              </div>
              <div
                className="ShowCage-playlist-hover-content"
                onClick={() => props.handlePlaylist('id')}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
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
            <div className="ShowCage-playlist shadow-lg ">
              <div
                className="ShowCage-playlist-content"
                style={{
                  backgroundImage:
                    "url('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ce5d8340339251.577bba3b36c3c.jpg')"
                }}
              >
                <div className="ShowCage-playlist-title text-teal-600">
                  <span>Weekly</span>

                  <span>Hits</span>
                </div>
              </div>
              <div
                className="ShowCage-playlist-hover-content"
                onClick={() =>
                  props.handlePlaylist('PLx0sYbCqOb8S7gusno3ZtoviWe5i0_9xa')
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
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
                          https://i.ytimg.com/vi/${song.songId}/hqdefault.jpg
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
                      xmlns="http://www.w3.org/2000/svg"
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
      </div>
    </div>
  );
}

export default ShowCage;
