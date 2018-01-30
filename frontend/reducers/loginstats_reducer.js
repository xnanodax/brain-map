import { combineReducers } from 'redux';
import popularDecks from './popular_decks_reducer';
import recentDecks from './recent_decks_reducer';

const loginReducer = combineReducers({
  popularDecks,
  recentDecks
});

export default loginReducer;
