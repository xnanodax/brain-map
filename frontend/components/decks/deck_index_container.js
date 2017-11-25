import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import DeckIndex from './deck_index';

import {
  fetchDecks,
  fetchDeck
} from '../../actions/deck_actions';

const mapStateToProps = (state, ownProps) => {
  const decksArr = Object.values(state.entities.decks);
  return {
    decks: decksArr.reverse(),
    count: decksArr.length
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchDecks: () => dispatch(fetchDecks()),
  fetchDeck: (id) => dispatch(fetchDeck(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DeckIndex));
