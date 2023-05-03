import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <h2>Math Magicians</h2>
    <div id="nav-box">
      <Link to="/">Home</Link>
      <span id="seperator">|</span>
      <Link to="Calculator">Calculator</Link>
      <span id="seperator">|</span>
      <Link to="/Quotes">Quotes</Link>
    </div>
  </nav>
);

export default Nav;
