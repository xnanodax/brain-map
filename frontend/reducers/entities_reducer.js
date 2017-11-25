import { combineReducers } from 'redux';
import decks from './decks_reducer';
import cards from './cards_reducer';

const entitiesReducer = combineReducers({
  decks,
  cards
});

export default entitiesReducer;
