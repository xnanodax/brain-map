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
  const cards = Object.keys(state.entities.cards);
  // const emptyDeck = deck.length > 0 ? true : false;
  return { deckId, deck, cards };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // let action = (ownProps.match.path === '/:deckId/edit') ? updateDeck : createDeck;
  return {
    fetchDeck: (id) => dispatch(fetchDeck(id)),
    updateDeck: (deck)=> dispatch(updateDeck(deck)),
    // action: (deck) => dispatch(action(deck)),
    deleteDeck: (deckId) => dispatch(deleteDeck(deckId))
   };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DeckShow));
