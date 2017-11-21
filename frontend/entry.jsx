import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { signup, login, logout } from './utils/session_util';
// import { signup, login, logout } from './actions/session';
//testing
window.signup = signup;
window.login = login;
window.logout = logout;


//testing

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const preloadedState = {
    session: {currentUser: null}
  };

  const store = configureStore(preloadedState);

  window.dispatch = store.dispatch;
  window.getState = store.getState;


  ReactDOM.render(<Root store={store} />, root);
});
