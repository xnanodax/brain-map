import React from 'react';
import SessionFormContainer from './session/session_form_container';
import { Link } from 'react-router-dom';

const App = () => (
  <div>
    <Link to="/">brainMap</Link>
    <SessionFormContainer />
  </div>
);

export default App;
