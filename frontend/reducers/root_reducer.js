import { combineReducers } from 'redux';
import entities from './entities/entities_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import ui from './ui/ui_reducer';

const RootReducer = combineReducers({
  entities,
  session,
  errors,
  ui
});

export default RootReducer;
