import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './ShowcageLinks.component.css';

function ShowcageLinks() {
  return (
    <div>
      <div className="Library-links">
        <NavLink activeClassName="is-active" to="/featured">
          Featured
        </NavLink>
        <NavLink activeClassName="is-active" to="/charts">
          Charts
        </NavLink>
        <NavLink activeClassName="is-active" to="/geners">
          Geners
        </NavLink>
        <NavLink activeClassName="is-active" to="/newrelease">
          New Releases
        </NavLink>
      </div>
    </div>
  );
}

export default ShowcageLinks;
