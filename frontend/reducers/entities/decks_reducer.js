import {
  RECEIVE_DECKS,
  RECEIVE_DECK,
  REMOVE_DECK,
  CLEAR_DECKS,
  RECEIVE_DECK_SEARCH_RESULTS
} from '../../actions/deck_actions';

import {
  RECEIVE_CARDS,
  RECEIVE_CARD,
  REMOVE_CARD
} from '../../actions/card_actions';

import {
  RECEIVE_SCORE
} from '../../actions/study_actions';

import merge from 'lodash/merge';

const decksReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState, cardId, deckId;

  switch(action.type) {
    case RECEIVE_DECKS:
      return merge({}, action.decks);
    case RECEIVE_DECK:
      return merge({}, state, action.deck);
    case RECEIVE_SCORE:
      return merge({}, action.deck);
    case REMOVE_DECK:
      newState = merge({}, state);
      delete newState[action.deck.id];
      return newState;
    case RECEIVE_CARD:
      newState = merge({}, state);
      cardId = parseInt(Object.keys(action.card)[0]);
      deckId = action.card[cardId].deck_id;
      newState[deckId].cards.push(cardId);
      return newState;
    case REMOVE_CARD:
      newState = merge({}, state);
      cardId = action.card.id;
      deckId = action.card.deck_id;
      const cardArr = state[action.card.deck_id].cards;
      const cardIndex = cardArr.indexOf(cardId);
      cardArr.splice(cardIndex, 1);
      return newState;
    default:
      return state;
  }
};

export default decksReducer;
