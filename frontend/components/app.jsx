import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';

import SessionFormContainer from './session/session_form_container';
import NavBarContainer from './navbar/navbar_container';
import DeckContainer from './decks/deck_container';
import DeckShowContainer from './decks/deck_show_container';

import {
  AuthRoute,
  ProtectedRoute
} from '../utils/route_util';

// <Redirect to ="/deck_feed" from="/" / >
const App = () => (
  <div className="app">
    <Redirect to="/signup" from='/' />

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />



    <Route path="/deck_feed" component={DeckContainer} />
    <Route path="/deck_feed" component={NavBarContainer} />

    <Route path="/deck_feed/:deckId" component={DeckShowContainer} />
  </div>
);

export default App;

// <ProtectedRoute path="/deck_feed" component={SessionFormContainer} />
// <Route path="/" component={NavBarContainer} />
// <ProtectedRoute path="/deck_feed" component={SessionFormContainer} />



// NOTES
//ADD
// UPDATE LINK 19 component={DeckIndex}


// make 2
// route render = {}
//
// make a master component
