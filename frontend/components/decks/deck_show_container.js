import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DeckShow from './deck_show';

import {
  fetchDecks,
  fetchDeck,
  createDeck,
  updateDeck,
  deleteDeck,
  clearDeckErrors
} from '../../actions/deck_actions';

import {
  fetchCards,
  fetchCard
} from './../../actions/card_actions';

const mapStateToProps = (state, ownProps) => {
  const deckId = ownProps.match.params.deckId;
  const deck = state.entities.decks[deckId];
  const numCards = Object.keys(state.entities.cards).length;
  const errors = state.errors.decks.slice(1) || [];
  const timeUpdate = state.errors.decks[0] || null;
  return { deckId, deck, numCards, errors, timeUpdate };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchDeck: (id) => dispatch(fetchDeck(id)),
    updateDeck: (deck)=> dispatch(updateDeck(deck)),
    deleteDeck: (deckId) => dispatch(deleteDeck(deckId)).then(() => ownProps.history.push("/deck")),
    clearDeckErrors: () => dispatch(clearDeckErrors())
   };
};

export default
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DeckShow);
