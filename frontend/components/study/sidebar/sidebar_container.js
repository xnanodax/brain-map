import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Sidebar from './sidebar';
import { fetchCard } from '../../../actions/card_actions';

const mapStateToProps = (state, ownProps) => {
  const deckId = ownProps.match.params.deckId;
  return {
    deck: state.entities.decks[deckId],
    numCards: Object.keys(state.entities.cards),
    currIndex: ownProps.currIndex,
    cards: Object.values(state.entities.cards)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchCard: (deckId, cardId) => (dispatch(fetchCard(deckId, cardId)))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps)(Sidebar)
);
