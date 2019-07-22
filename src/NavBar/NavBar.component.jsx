import React, { useEffect } from 'react';
import { useStore, useActions } from 'easy-peasy';
import { NavLink } from 'react-router-dom';

import './NavBar.component.css';

function NavBar() {
  const LoadLocalStorageData = useActions(
    actions => actions.LoadLocalStorageData
  );

  const loadLocalStorageFavourites = useActions(
    actions => actions.loadLocalStorageFavourites
  );
  useEffect(() => {
    console.log('calling loadlocalstorage');
    LoadLocalStorageData({ key: 'songs' });
    loadLocalStorageFavourites({ key: 'favourites' });
  }, []);
  const recentSongs = useStore(store => store.recentSongs);
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
        <i className="fal fa-home text-base" />
        <span className="link-title">Home</span>
      </NavLink>

      <NavLink to="/search">
        <i className="fal fa-search" />
        <span className="link-title">Search</span>
      </NavLink>

      <NavLink to="/library">
        <i className="fal fa-align-right" />
        <span className="link-title">Your Library</span>
      </NavLink>

      <div className="RecentlyPlayed">
        <div className="RecentlyPlayed-content-heading">
          <h2>Recently Played</h2>
        </div>
        <div className="RecentlyPlayed-content">
          <div className="RecentlyPlayed-list">
            {recentSongs.slice(0, 3).map(song => {
              return (
                <div className=" RecentlyPlayed-list-names">
                  <div className="flex RecentlyPlayed-name-container">
                    <span className="RecentlyPlayed-name">
                      {song.name}
                      {recentSongs[0].id === song.id ? (
                        <i className="fal fa-volume-up" />
                      ) : (
                        ''
                      )}
                    </span>
                  </div>
                  <p className="RecentlyPlayed-type">{song.type}</p>
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
