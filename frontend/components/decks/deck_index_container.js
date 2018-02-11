import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DeckIndex from './deck_index';

import { fetchDecks, fetchDeck, clearDecks } from '../../actions/deck_actions';

import { toggleModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  const decksArr = Object.values(state.entities.decks);
  const currentDeckId = parseInt(ownProps.match.params.deckId);
  return {
    decks: decksArr.reverse(),
    deckCount: decksArr.length,
    currentDeckId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchDecks: () => dispatch(fetchDecks()),
  fetchDeck: (id) => dispatch(fetchDeck(id)),
  clearDecks: () => dispatch(clearDecks()),
  toggleModal: () => dispatch(toggleModal())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DeckIndex));
