import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchDeck, updateDeck, clearDeckErrors } from '../../actions/deck_actions';
import { toggleModal } from '../../actions/modal_actions';
import DeckShow from './deck_show';

const mapStateToProps = (state, ownProps) => {
  const deckId = ownProps.match.params.deckId;
  return {
  deckId, 
  deck: state.entities.decks[deckId],
  numCards: Object.keys(state.entities.cards).length,
  errors: state.errors.decks.slice(1) || [],
  timeUpdate: state.errors.decks[0] || null };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchDeck: (id) => dispatch(fetchDeck(id)),
  updateDeck: (deck)=> dispatch(updateDeck(deck)),
  clearDeckErrors: () => dispatch(clearDeckErrors()),
  toggleModal: () => dispatch(toggleModal())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DeckShow));
