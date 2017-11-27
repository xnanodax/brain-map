import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Sidebar from './sidebar';
import { fetchCard } from '../../../actions/card_actions';

const mapStateToProps = (state, ownProps) => ({
  deckId: ownProps.match.params.deckId,
  cards: state.entities.cards
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchCard: (deckId, cardId) => (dispatch(fetchCard(deckId, cardId)))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps)(Sidebar)
);
