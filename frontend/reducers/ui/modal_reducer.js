import { MODAL_OPEN, MODAL_CLOSE } from '../../actions/modal_actions';
import merge from 'lodash/merge';

const modalReducer = (state = false, action) => {
  Object.freeze(state);

  switch(action.type) {
    case MODAL_OPEN:
      return action.payload;
    case MODAL_CLOSE:
      return action.payload;
    default:
      return state;
  }

};

export default modalReducer;
