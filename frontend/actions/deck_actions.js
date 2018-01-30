import * as DeckAPIUtil from '../utils/deck_util';

export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const RECEIVE_DECK = "RECEIVE_DECK";
export const REMOVE_DECK = "REMOVE_DECK";
export const RECEIVE_DECK_ERRORS = "RECEIVE_DECK_ERRORS";
export const CLEAR_DECKS = "CLEAR_DECKS";
export const RECEIVE_DECK_SEARCH_RESULTS = "RECEIVE_DECK_SEARCH_RESULTS";
export const RECEIVE_POPULAR_DECKS = "RECEIVE_POPULAR_DECKS";
export const RECEIVE_RECENT_DECKS = "RECEIVE_RECENT_DECKS";

const receiveDecks = decks => ({
  type: RECEIVE_DECKS,
  decks
});

const receiveDeck = deck => ({
  type: RECEIVE_DECK,
  deck
});

const removeDeck = deck => ({
  type: REMOVE_DECK,
  deck
});

const receiveDeckErrors = errors => ({
  type: RECEIVE_DECK_ERRORS,
  errors
});

const removeDecks = () => ({
  type: CLEAR_DECKS,
  decks: []
});

const receiveDeckSearchResults = searchResults => ({
  type: RECEIVE_DECK_SEARCH_RESULTS,
  searchResults
});

const receievePopularDecks = popularDeckResults => ({
  type: RECEIVE_POPULAR_DECKS,
  popularDeckResults
});

const receiveRecentDecks = recentDeckResults => ({
  type: RECEIVE_RECENT_DECKS,
  recentDeckResults
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
          errors => dispatch(receiveDeckErrors(errors.responseJSON)))
);

export const updateDeck = deck => dispatch => (
  DeckAPIUtil.updateDeck(deck)
    .then(newDeck => dispatch(receiveDeck(newDeck)),
      errors => dispatch(receiveDeckErrors(errors.responseJSON)))
);

export const deleteDeck = id => dispatch => (
  DeckAPIUtil.deleteDeck(id)
    .then(delDeck => dispatch(removeDeck(delDeck)),
      errors => dispatch(receiveDeckErrors(errors.responseJSON)))
);

export const clearDecks = () => dispatch => (
  dispatch(receiveDecks([]))
);

export const searchDecks = title => dispatch => (
  DeckAPIUtil.searchDecks(title)
    .then(decks => dispatch(receiveDeckSearchResults(decks)))
);

export const popularDecks = () => dispatch => (
  DeckAPIUtil.popularDecks()
    .then(serverDecks => dispatch(receievePopularDecks(serverDecks)))
);

export const recentDecks = () => dispatch => (
  DeckAPIUtil.recentDecks()
    .then(serverDecks => dispatch(receiveRecentDecks(serverDecks)))
);
