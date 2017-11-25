import {
  RECEIVE_CARDS,
  RECEIVE_CARD,
  REMOVE_CARD
} from '../actions/card_actions';
import merge from 'lodash/merge';

const cardsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CARDS:
      return merge({}, action.cards);
    case RECEIVE_CARD:
      return merge({}, state, action.card);
    case REMOVE_CARD:
      const newState = merge({}, state);
      delete newState[action.card.id];
      return newState;
    default:
      return state;
  }
};

export default cardsReducer;
