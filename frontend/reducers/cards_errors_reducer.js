import {
  RECEIVE_CARDS,
  RECEIVE_CARD,
  REMOVE_CARD,
  RECEIVE_CARD_ERRORS
} from '../actions/card_actions';

const CardsErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    // case RECEIVE_CARDS:
    //   return [];
    case RECEIVE_CARD:
      return [];
    case REMOVE_CARD:
      return [];
    case RECEIVE_CARD_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default CardsErrorReducer;
