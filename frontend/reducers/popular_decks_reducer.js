import { RECEIVE_POPULAR_DECKS } from '../actions/deck_actions';

const popularDecks = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POPULAR_DECKS:
      return action.popularDeckResults;
    default:
      return state;
  }
};

export default popularDecks;
