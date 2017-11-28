import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Main from './main';
import {
  // addScore,
  recordScore
} from './../../../actions/study_actions';

import {
  fetchDeck
} from './../../../actions/deck_actions';

import {
  fetchCards,
  fetchCard
} from './../../../actions/card_actions';

const mapStateToProps = (state, ownProps) => ({
  deckId: ownProps.match.params.deckId,
  cards: Object.values(state.entities.cards),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  // addScore: (cardId, learningScore) => dispatch(addScore(cardId, learningScore)),
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
