import {
  RECEIVE_DECKS,
  RECEIVE_DECK,
  REMOVE_DECK,
  CLEAR_DECKS
} from '../actions/deck_actions';

import {
  RECEIVE_SCORE
} from '../actions/study_actions';

import merge from 'lodash/merge';

const decksReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_DECKS:
      return merge({}, action.decks);
    case RECEIVE_DECK:
      return merge({}, state, action.deck);
    case RECEIVE_SCORE:
      return merge({}, action.deck);
    case REMOVE_DECK:
      newState = merge({}, state);
      delete newState[action.deck.id];
      return newState;
    default:
      return state;
  }
};

export default decksReducer;
