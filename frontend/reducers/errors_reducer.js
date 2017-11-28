import { combineReducers } from 'redux';
import session from './session_errors_reducer';
import decks from './decks_error_reducer';
import cards from './cards_errors_reducer';
import tags from './taggings_errors_reducer';

const errorsReducer = combineReducers({
  session,
  decks,
  cards,
  tags
});

export default errorsReducer;
