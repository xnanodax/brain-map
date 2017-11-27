import * as APIUtil from '../utils/session_util';
import { createDeck } from './deck_actions';
import { createCard } from './card_actions';

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

const defaultDeck = {title: "tap to edit"};
const defaultCard = {keyword: "tap to edit", body: "tap to edit"};

export const signup = user => dispatch => (
  APIUtil.signup(user)
    .then((newUser) => {
        dispatch(receiveCurrentUser(newUser));
        dispatch(createDeck(defaultDeck))
          .then((action) => {
            dispatch(createCard(Object.keys(action.deck)[0], defaultCard));
            });
      },
      (errors) => dispatch(receiveErrors(errors.responseJSON)))
);

export const login = user => dispatch => (
  APIUtil.login(user)
    .then((loggedInUser) => dispatch(receiveCurrentUser(loggedInUser)),
          (errors) => dispatch(receiveErrors(errors.responseJSON)))
);

export const logout = () => dispatch => (
  APIUtil.logout()
    .then(() => dispatch(receiveCurrentUser(null)),
          (errors) => dispatch(receiveErrors(errors.responseJSON)))
);

export const clearErrors = () => dispatch => (
  dispatch(receiveErrors([]))
);
