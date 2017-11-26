import { combineReducers } from 'redux';
import decks from './decks_reducer';
import cards from './cards_reducer';
import tags from './taggings_reducer';

const entitiesReducer = combineReducers({
  decks,
  cards,
  tags
});

export default entitiesReducer;
