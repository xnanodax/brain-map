import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';

import SessionFormContainer from './session/session_form_container';
import HomePageNotLoggedInContainer from './homepage/homepage_not_logged_in_container';
import NavBarLoggedInContainer from './navbar_log/navbar_logged_in_container';
import DeckContainer from './decks/deck_index_container';
import DeckShowContainer from './decks/deck_show_container';
import DeckFormContainer from './decks/deck_form/deck_form_container';

import CardIndexContainer from './cards/index/card_index_container';
import CardFormContainer from './cards/form/card_form_container';
import {
  AuthRoute,
  ProtectedRoute
} from '../utils/route_util';


//Auth Route is for when you login, what you shouldn't see.
const App = () => (
  <div className="app">

    <Route exact path="/" component={HomePageNotLoggedInContainer} />
    <AuthRoute path="/login" component={HomePageNotLoggedInContainer} />
    <AuthRoute path="/signup" component={HomePageNotLoggedInContainer} />

    <Route path="/deck" component={NavBarLoggedInContainer} />
    <Route path="/deck" component={DeckContainer} />
    <Route exact path="/deck/view/:deckId" component={DeckShowContainer} />


    <Route path="/deck/new" component={DeckFormContainer} />
    <Route path="/deck/view/:deckId/add_card" component={CardFormContainer} />
  </div>
);

export default App;



// NOTES
//ADD
// UPDATE LINK 19 component={DeckIndex}


// make 2 routes
// route render = {}
//
// make a master component
