import React from 'react';
import SessionForm from '../session/session_form_container';
import NavBarNotLoggedIn from '../navbar_not_log/navbar_not_logged_in';

const HomePageNotLoggedIn = (props) => (
  <div className="full-width">
    <NavBarNotLoggedIn {...props}/>
    <SessionForm {...props}/>
  </div>
);

export default HomePageNotLoggedIn;
