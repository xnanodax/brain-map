import * as APIUtil from '../utils/session_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const signup = user => (
  APIUtil.signup(user)
    .then((newUser) => console.log(receiveCurrentUser(newUser)),
          (errors) => console.log(receiveErrors(errors.responseJSON)))
);

export const login = user => (
  APIUtil.login(user)
    .then((loggedInUser) => console.log(receiveCurrentUser(loggedInUser)),
          (errors) => console.log(receiveErrors(errors.responseJSON)))
);

export const logout = () => (
  APIUtil.logout()
    .then(() => console.log(receiveCurrentUser(null)),
          (errors) => console.log(receiveErrors(errors.responseJSON)))
);
