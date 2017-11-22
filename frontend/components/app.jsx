import React from 'react';
import { Link, Route } from 'react-router-dom';

import SessionFormContainer from './session/session_form_container';
import NavBarContainer from './navbar/navbar_container';
import DeckContainer from './decks/deck_container';

import {
  AuthRoute,
  ProtectedRoute
} from '../utils/route_util';

const App = () => (
  <div className="app">

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <Route exact path="/deck_feed" component={DeckContainer} />
    <Route exact path="/deck_feed" component={NavBarContainer} />
    <ProtectedRoute exact path="/home" component={SessionFormContainer} />

  </div>
);

export default App;

// <Route path="/" component={NavBarContainer} />

// NOTES
//ADD
// UPDATE LINK 19 component={DeckIndex}


// make 2
// route render = {}
//
// make a master component
