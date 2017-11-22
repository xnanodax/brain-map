import { combineReducers } from 'redux';
import decks from './decks_reducer';

const entitiesReducer = combineReducers({
  decks
});

export default entitiesReducer;
