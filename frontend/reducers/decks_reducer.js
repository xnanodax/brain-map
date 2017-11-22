import {
  RECEIVE_DECKS,
  RECEIVE_DECK,
  REMOVE_DECK
} from '../actions/deck_actions';

import merge from 'lodash/merge';

const decksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_DECKS:
      return merge({}, state, action.decks);
    case RECEIVE_DECK:
      return merge({}, state, action.deck);
    case REMOVE_DECK:
      const newState = merge({}, state);
      delete newState[action.deck.id];
      return newState;
    default:
      return state;
  }
};

export default decksReducer;
