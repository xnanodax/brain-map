import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ loggedIn, logout }) => (
  <div>
    I am a NavBar!
    {
      loggedIn ? (
        <div className="navbar-loggedin">
          <button onClick={logout}>Log Out</button>
        </div>
      ) : (
        <div className="navbar-loggedout">
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>

        </div>
      )
    }
  </div>
);

export default NavBar;
