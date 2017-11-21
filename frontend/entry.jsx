import React from 'react';
import ReactDOM from 'react-dom';


import { signup, login, logout } from './utils/session_util';
//testing
window.signup = signup;
window.login = login;
window.logout = logout;






//testing

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>React is taking over!</h1>, root);
});
