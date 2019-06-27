import React, { useState } from 'react';

import './NavBar.component.css';

function NavBar() {
  return (
    <div
      className="side-nav bg-black fixed h-full w-200  font-mono "
      id="side-menu"
    >
      <i class="fab fa-napster text-white">
        <span className="logo">Tolo</span>
      </i>
      <a href="#">
        <i className="fas fa-home text-base" />
        Home
      </a>

      <a href="#">
        <i className="fas fa-search" />
        Search
      </a>

      <a href="">
        <i className="fas fa-at" />
        me
      </a>
    </div>
  );
}

export default NavBar;
