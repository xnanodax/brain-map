import * as DeckAPIUtil from '../utils/deck_util';

export const RECEIVE_DECKS = "RECEIVE_ALL_DECKS";
export const RECEIVE_DECK = "RECEIVE_DECK";
export const REMOVE_DECK = "REMOVE_DECK";
export const RECEIVE_DECK_ERRORS = "RECEIVE_ERRORS";

const receiveDecks = decks => ({
  type: RECEIVE_DECKS,
  decks
});

const receiveDeck = deck => ({
  type: RECEIVE_DECKS,
  deck
});

const receiveDeckErrors = errors => ({
  type: RECEIVE_DECK_ERRORS,
  errors
});

export const fetchDecks = () => dispatch => (
  DeckAPIUtil.fetchDecks()
    .then(decks => dispatch(receiveDecks(decks)),
          errors => dispatch(receiveDeckErrors(errors.responseJSON)))
);

export const fetchDeck = (id) => dispatch => (
  DeckAPIUtil.fetchDeck(id)
    .then(deck => dispatch(receiveDeck(deck)),
          errors => dispatch(receiveDeckErrors(errors.responseJSON)))
);

export const createDeck = deck => dispatch => (
  DeckAPIUtil.createDeck(deck)
    .then(newDeck => dispatch(receiveDeck(newDeck)),
          errors => dispatch(receiveDeckErrors(errors)))
);

export const updateDeck = deck => dispatch => (
  DeckAPIUtil.updateDeck(deck)
    .then(newDeck => dispatch(receiveDeck(newDeck)),
      errors => dispatch(receiveDeckErrors(errors.responseJSON)))
);

export const deleteDeck = id => dispatch => (
  DeckAPIUtil.deleteDeck(id)
    .then(delDeck => dispatch(receiveDeck(delDeck)),
      errors => dispatch(receiveDeckErrors(errors.responseJSON)))
);
