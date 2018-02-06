import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = ({ loggedIn, logout, props }) => (
  <nav className="navbar">
    <div className="logo">
      <Link to="/deck">
          <i className="far fa-lightbulb green-dark-hover" aria-hidden="true">
          </i>
      </Link>
    </div>

    <div className="navbar-icons-all">
      <ul className="navbar-icon-list-top">

      </ul>

      <ul className="navbar-icon-list-middle">
        <Link to="/search"><i className="fas fa-search fa-2x green-dark-hover" aria-hidden="true"></i></Link>
        <Link to="/deck"><i className="fas fa-book fa-2x green-dark-hover" aria-hidden="true"></i></Link>
      </ul>


      <ul className="nav-bar-icon-list-bottom">
        <span className="cursor" onClick={logout}>
          <i className="fas fa-sign-out-alt fa-2x gray"></i>
        </span>
    </ul>
    </div>
  </nav>
);

export default NavBar;

// <i className="fa fa-sticky-note" aria-hidden="true"></i>
// <i className="fa fa-compress" aria-hidden="true"></i>
