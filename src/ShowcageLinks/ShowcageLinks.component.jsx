import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './ShowcageLinks.component.css';

function ShowcageLinks() {
  return (
    <div>
      <div className="Library-links">
        <NavLink
          className="Library-link"
          activeClassName="is-active"
          to="/featured"
        >
          Featured
          <hr />
        </NavLink>

        <NavLink
          className="Library-link"
          activeClassName="is-active"
          to="/charts"
        >
          Charts
          <hr />
        </NavLink>
        <NavLink
          className="Library-link "
          activeClassName="is-active"
          to="/geners"
        >
          Genres
          <hr />
        </NavLink>
        <NavLink
          className="Library-link"
          activeClassName="is-active"
          to="/newrelease"
        >
          New Releases
          <hr />
        </NavLink>
      </div>
    </div>
  );
}

export default ShowcageLinks;
