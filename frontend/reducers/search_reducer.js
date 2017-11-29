import { RECEIVE_DECK_SEARCH_RESULTS } from '../actions/deck_actions';
import { RECEIVE_TAG_SEARCH_RESULTS } from '../actions/tagging_action';

const searchReducers = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DECK_SEARCH_RESULTS:
      return action.searchResults;
    case RECEIVE_TAG_SEARCH_RESULTS:
      return action.searchResults;
    default:
      return state;
  }
};

export default searchReducers;
