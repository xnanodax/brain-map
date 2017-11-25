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

  const deck = state.entities.decks[ownProps.match.params.deckId];
  // const card = state.entities.cards
  return { deck };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action = (ownProps.match.path === '/:deckId/edit') ? updateDeck : createDeck;
  return {
    // fetchCards: (deckId) => dispatch(fetchCards(deckId)),
    fetchDecks: () => dispatch(fetchDecks()),
    fetchDeck: (id) => dispatch(fetchDeck(id)),
    action: (deck) => dispatch(action(deck)),
    deleteDeck: (deck_id) => dispatch(deleteDeck(deck_id))
   };
  // return {};
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DeckShow));
