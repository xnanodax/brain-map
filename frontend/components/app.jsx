import React from 'react';
import { Link, Route, Redirect, Switch } from 'react-router-dom';

import SessionFormContainer from './session/session_form_container';
import HomePageNotLoggedInContainer from './homepage/homepage_not_logged_in_container';
import NavBarLoggedInContainer from './navbar_log/navbar_logged_in_container';
import DeckContainer from './decks/deck_index_container';
import DeckShowContainer from './decks/deck_show_container';
import DeckFormContainer from './decks/deck_form/deck_form_container';
import CardIndexContainer from './cards/index/card_index_container';
import CardFormContainer from './cards/form/card_form_container';
import StudyContainer from './study/study_container';
import SearchContainer from './search/search_container';

import {
  AuthRoute,
  ProtectedRoute
} from '../utils/route_util';


//Auth Route is for when you login, what you shouldn't see.
const App = () => (
    <div className="app">
      <Redirect exact to="/login" from="/" />

      <ProtectedRoute path="/deck" component={DeckContainer} />

      <ProtectedRoute exact path="/deck/view/:deckId" component={DeckShowContainer} />
      <ProtectedRoute path="/deck/new" component={DeckFormContainer} />
      <ProtectedRoute path="/study" component={NavBarLoggedInContainer} />

      <Switch>
        <ProtectedRoute exact path="/study/:deckId" component={StudyContainer} />
        <ProtectedRoute path="/search" component={SearchContainer} />

        <ProtectedRoute path="/deck" component={NavBarLoggedInContainer} />
        <AuthRoute exact path="/login" component={HomePageNotLoggedInContainer} />
        <AuthRoute exact path="/signup" component={HomePageNotLoggedInContainer} />
        <Route render={() => <Redirect to="/deck" />} />

      </Switch>
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
