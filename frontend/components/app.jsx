import React from 'react';
import { Link, Route } from 'react-router-dom';

import SessionFormContainer from './session/session_form_container';
import NavBarContainer from './navbar/navbar_container';
import { AuthRoute } from '../utils/route_util';

const App = () => (
  <div>
    <Link to="/">brainMap</Link>
    <Route path="/" component={NavBarContainer} />

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
