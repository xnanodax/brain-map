import {
  RECEIVE_DECKS,
  RECEIVE_DECK,
  REMOVE_DECK,
  RECEIVE_DECK_ERRORS
} from '../actions/deck_actions';


const DecksErrorReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_DECKS:
      return [];
    case RECEIVE_DECK:
      return [];
    case REMOVE_DECK:
      return [];
    case RECEIVE_DECK_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default DecksErrorReducer;
