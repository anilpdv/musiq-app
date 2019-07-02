import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { RecentSongsContext } from '../context/RecentSongsContext';

import './NavBar.component.css';

function NavBar() {
  const recentSongs = useContext(RecentSongsContext);
  console.log('recent songs played', recentSongs);
  return (
    <div
      className="side-nav  bg-black fixed h-full lg:w-200 sm:w-0   "
      id="side-menu"
    >
      <i class="fab fa-napster text-white">
        <span className="logo">Tolo</span>
      </i>
      <NavLink to="/">
        <i className="fas fa-home text-base" />

        <span className="link-title">Home</span>
      </NavLink>

      <NavLink to="/search">
        <i className="fas fa-search" />
        <span className="link-title">Search</span>
      </NavLink>

      <NavLink to="/search">
        <i className="fas fa-align-right" />
        <span className="link-title">Your Library</span>
      </NavLink>
      <div className="RecentlyPlayed">
        <div className="RecentlyPlayed-content-heading">
          <h2>Recently Played</h2>
        </div>
        <div className="RecentlyPlayed-content">
          <div className="RecentlyPlayed-list">
            {recentSongs.slice(0, 6).map(song => {
              return (
                <div className=" RecentlyPlayed-list-names">
                  <div className="flex RecentlyPlayed-name-container">
                    <span className="RecentlyPlayed-name">
                      {song.name}
                      <i className="fas fa-volume-up" />
                    </span>
                  </div>
                  <p className="RecentlyPlayed-type">{song.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
