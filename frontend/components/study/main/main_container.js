import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Main from './main';
import { recordScore } from './../../../actions/study_actions';
import { fetchDeck } from './../../../actions/deck_actions';
import { fetchCards, fetchCard } from './../../../actions/card_actions';

const mapStateToProps = (state, ownProps) => {
  const deckId =ownProps.match.params.deckId;
  const deck = state.entities.decks[deckId];
  const cards = Object.values(state.entities.cards);

  return {
    deckId, deck, cards
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  recordScore: (cardId, learningScore) => dispatch(recordScore(cardId, learningScore)),
  fetchDeck: (id) => dispatch(fetchDeck(id)),
  fetchCards: (id) => dispatch(fetchCards(id)),
  fetchCard: (deckId, cardId) => dispatch(fetchCard(deckId, cardId))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps)(Main)
);
