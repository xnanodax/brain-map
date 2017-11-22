import React from 'react';
import { Link, Route } from 'react-router-dom';

import SessionFormContainer from './session/session_form_container';
import NavBarContainer from './navbar/navbar_container';
import {
  AuthRoute,
  ProtectedRoute
} from '../utils/route_util';

const App = () => (
  <div className="app">

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <ProtectedRoute exact path="/home" component={SessionFormContainer} />

  </div>
);

export default App;

// <Route path="/" component={NavBarContainer} />

// NOTES
//ADD
// UPDATE LINK 19 component={DeckIndex}
