import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ loggedIn, logout }) => (
  <nav className="navbar">
    <div className="logo">
      <Link to="/">
        <i className="fa fa-lightbulb-o " aria-hidden="true">
        </i>
      </Link>
    </div>

    <div className="navbar-links">
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
    </div>

    <div className="navbar-icons-all">
      <ul className="navbar-icon-list-top">
        <i className="fa fa-plus" aria-hidden="true"></i>
      </ul>

      <ul className="navbar-icon-list-middle">
        <i className="fa fa-search" aria-hidden="true"></i>
        <i className="fa fa-book" aria-hidden="true"></i>
        <i className="fa fa-sticky-note" aria-hidden="true"></i>
      </ul>


      <ul className="nav-bar-icon-list-bottom">
        <i className="fa fa-sign-out" aria-hidden="true"></i>
      </ul>
    </div>
  </nav>
);

export default NavBar;
