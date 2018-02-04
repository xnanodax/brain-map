import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CardIndex from './card_index';

import {
  fetchCards,
  fetchCard,
  updateCard,
  deleteCard,
  createCard,
  clearCardErrors
} from './../../../actions/card_actions';

const mapStateToProps = (state, ownProps) => ({
  cards: Object.values(state.entities.cards),
  deckId: ownProps.match.params.deckId,
  errors: state.errors.cards.slice(2) || [],
  cardIdError: state.errors.cards[0] || null,
  timeUpdate: state.errors.cards[1] || null
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createCard: (deckId, card) => dispatch(createCard(deckId, card)),
  fetchCards: (deckId) => dispatch(fetchCards(deckId)),
  updateCard: (card) => dispatch(updateCard(card)),
  deleteCard: (cardId) => dispatch(deleteCard(cardId)),
  clearCardErrors: () => dispatch(clearCardErrors())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CardIndex));
