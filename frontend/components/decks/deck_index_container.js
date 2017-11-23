import { connect } from 'react-redux';
import DeckIndex from './deck_index';
import { withRouter } from 'react-router-dom';

import { fetchDecks, fetchDeck } from '../../actions/deck_actions';

const mapStateToProps = (state, ownProps) => ({
  decks: Object.values(state.entities.decks).reverse()
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchDecks: () => dispatch(fetchDecks()),
  fetchDeck: (id) => dispatch(fetchDeck(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DeckIndex));
