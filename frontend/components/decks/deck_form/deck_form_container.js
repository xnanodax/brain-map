import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DeckForm from './deck_form';
import { createDeck } from './../../../actions/deck_actions';

const mapStateToProps = (state, ownProps) => ({
  deck: state.entities.decks[ownProps.match.params.deckId],
  errors: state.errors.decks
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createDeck: (deck) => dispatch(createDeck(deck)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DeckForm));
