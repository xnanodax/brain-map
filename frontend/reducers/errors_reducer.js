import { combineReducers } from 'redux';
import session from './session_errors_reducer';
import DecksErrorReducer from './decks_error_reducer';

const errorsReducer = combineReducers({
  session,
  decks: DecksErrorReducer
});

export default errorsReducer;
