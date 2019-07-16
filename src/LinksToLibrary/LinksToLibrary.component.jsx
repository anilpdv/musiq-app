import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './LinksToLibrary.component.css';

function LinksToLibrary() {
  return (
    <div className="Library-links">
      <NavLink activeClassName="is-active" to="/liked">
        liked songs
      </NavLink>
      <NavLink activeClassName="is-active" to="/recent">
        recent songs
      </NavLink>
      <NavLink activeClassName="is-active" to="/madeforyou">
        made for you
      </NavLink>
      <NavLink activeClassName="is-active" to="/yourplaylist">
        playlists
      </NavLink>
    </div>
  );
}

export default LinksToLibrary;
