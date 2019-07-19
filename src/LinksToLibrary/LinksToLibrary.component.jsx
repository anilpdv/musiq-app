import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './LinksToLibrary.component.css';

function LinksToLibrary() {
  return (
    <div className="Library-links">
      <div className="Library-link">
        <NavLink activeClassName="is-active" to="/liked">
          liked songs
          <hr />
        </NavLink>
      </div>
      <div className="Library-link">
        <NavLink activeClassName="is-active" to="/recent">
          recent songs
          <hr />
        </NavLink>
      </div>
      <div className="Library-link">
        <NavLink activeClassName="is-active" to="/madeforyou">
          made for you
          <hr />
        </NavLink>
      </div>
      <div className="Library-link">
        <NavLink activeClassName="is-active" to="/yourplaylist">
          playlists
          <hr />
        </NavLink>
      </div>
    </div>
  );
}

export default LinksToLibrary;
