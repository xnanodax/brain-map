import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DeckIndex from './deck_index';

import {
  fetchDecks,
  fetchDeck,
  clearDecks
} from '../../actions/deck_actions';

const mapStateToProps = (state, ownProps) => {
  const decksArr = Object.values(state.entities.decks);
  const cardsArr = Object.values(state.entities.cards) || 0;
  return {
    decks: decksArr.reverse(),
    deckCount: decksArr.length,
    cards: cardsArr
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchDecks: () => dispatch(fetchDecks()),
  fetchDeck: (id) => dispatch(fetchDeck(id)),
  clearDecks: () => dispatch(clearDecks())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DeckIndex));
