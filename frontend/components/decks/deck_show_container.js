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
  // const emptyDeck = deck.length > 0 ? true : false;
  return { deckId, deck };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // let action = (ownProps.match.path === '/:deckId/edit') ? updateDeck : createDeck;
  return {
    // fetchDecks: () => dispatch(fetchDecks()),
    fetchDeck: (id) => dispatch(fetchDeck(id)),
    updateDeck: (deck)=> dispatch(updateDeck(deck)),
    // action: (deck) => dispatch(action(deck)),
    deleteDeck: (deck_id) => dispatch(deleteDeck(deck_id))
   };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DeckShow));
