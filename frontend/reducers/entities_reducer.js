import { combineReducers } from 'redux';
import decks from './decks_reducer';
import cards from './cards_reducer';
import tags from './taggings_reducer';
import searchResults from './search_reducer';

const entitiesReducer = combineReducers({
  decks,
  cards,
  tags,
  searchResults
});

export default entitiesReducer;
