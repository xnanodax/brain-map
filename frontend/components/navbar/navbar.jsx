import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ loggedIn, logout }) => (
  <nav className="navbar">
    <div className="logo">
      <Link to="/">
        <i class="fa fa-lightbulb-o " aria-hidden="true">
        </i>
      </Link>
    </div>
    {
      loggedIn ? (
        <div className="navbar-loggedin">
          <button onClick={logout}>Log Out</button>
        </div>
      ) : (
        <nav>
          <ul className="navbar-loggedout">
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">Log In</Link></li>
          </ul>
        </nav>
      )
    }

    <div class="navbar-icons-all">
      <ul className="navbar-icon-list-top">
        <i class="fa fa-plus" aria-hidden="true"></i>
      </ul>

      <ul className="navbar-icon-list-middle">
        <i class="fa fa-search" aria-hidden="true"></i>
        <i class="fa fa-book" aria-hidden="true"></i>
        <i class="fa fa-sticky-note" aria-hidden="true"></i>
      </ul>


      <ul className="nav-bar-icon-list-bottom">
        <i class="fa fa-sign-out" aria-hidden="true"></i>
      </ul>
    </div>
  </nav>
);

export default NavBar;
