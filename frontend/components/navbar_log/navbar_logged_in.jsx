import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = ({ logout }) => (
  <nav className="navbar flexbox-column">
    <div className="logo">
      <Link to="/deck">
        <i className="far fa-lightbulb green-dark-hover fa-1x" aria-hidden="true" alt="your homepage"></i>
      </Link>
    </div>

    <div className="navbar-icons-all flexbox-column">
      <ul className="navbar-icons-top"></ul>

      <ul className="navbar-icons-middle flexbox-column">
        <Link to="/search"><i className="fas fa-search fa-2x green-dark-hover" aria-hidden="true" alt="search"></i></Link>
        <Link to="/deck"><i className="fas fa-book fa-2x green-dark-hover" aria-hidden="true" alt="decks"></i></Link>
      </ul>

      <ul className="navbar-icons-bottom">
        <div className="cursor" onClick={logout}>
          <i className="fas fa-sign-out-alt fa-2x gray" alt="logout"></i>
        </div>
      </ul>
    </div>
  </nav>
);

export default NavBar;
