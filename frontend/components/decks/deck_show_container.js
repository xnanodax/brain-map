import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DeckShow from './deck_show';

import {
  fetchDecks,
  fetchDeck,
  createDeck,
  updateDeck,
  deleteDeck
} from '../../actions/deck_actions';

import {
  fetchCards,
  fetchCard
} from './../../actions/card_actions';

const mapStateToProps = (state, ownProps) => {
  const deckId = ownProps.match.params.deckId;
  const deck = state.entities.decks[deckId];
  const numCards = Object.keys(state.entities.cards).length;
  return { deckId, deck, numCards };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // let action = (ownProps.match.path === '/:deckId/edit') ? updateDeck : createDeck;
  return {
    fetchDeck: (id) => dispatch(fetchDeck(id)),
    updateDeck: (deck)=> dispatch(updateDeck(deck)),
    deleteDeck: (deckId) => dispatch(deleteDeck(deckId))
   };
};

export default
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DeckShow);
