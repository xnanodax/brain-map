import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = ({ loggedIn, logout, props }) => (
  <nav className="navbar">
    <div className="logo">
      <Link to="/deck">
          <i className="fa fa-lightbulb-o " aria-hidden="true">
          </i>
      </Link>
    </div>

    <div className="navbar-icons-all">
      <ul className="navbar-icon-list-top">

      </ul>

      <ul className="navbar-icon-list-middle">
        <Link to="/search"><i className="fa fa-search fa-2x" aria-hidden="true"></i></Link>
        <Link to="/deck"><i className="fa fa-book fa-2x" aria-hidden="true"></i></Link>
      </ul>


      <ul className="nav-bar-icon-list-bottom">
        <i className="fa fa-sign-out fa-2x" aria-hidden="true" onClick={logout}></i>
      </ul>
    </div>
  </nav>
);

export default NavBar;

// <i className="fa fa-sticky-note" aria-hidden="true"></i>
// <i className="fa fa-compress" aria-hidden="true"></i>
