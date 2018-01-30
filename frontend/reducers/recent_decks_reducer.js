import { RECEIVE_RECENT_DECKS } from '../actions/deck_actions';

const popularDecks = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RECENT_DECKS:
      return action.recentDeckResults;
    default:
      return state;
  }
};

export default popularDecks;
