import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DeckForm from './deck_form';
import { createDeck, clearDeckErrors } from './../../../actions/deck_actions';

const mapStateToProps = (state, ownProps) => {
  const lastId = Math.max(...Object.keys(state.entities.decks));
  return { deck: state.entities.decks[lastId],
  errors: state.errors.decks
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  createDeck: (deck) => dispatch(createDeck(deck)),
  clearDeckErrors: () => dispatch(clearDeckErrors())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DeckForm));
