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
  errors: state.errors.cards.slice(1) || [],
  cardIdError: state.errors.cards[0] || null
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createCard: (deckId, card) => dispatch(createCard(deckId, card)),
  fetchCards: (deckId) => dispatch(fetchCards(deckId)),
  updateCard: (deckId, card) => dispatch(updateCard(deckId, card)),
  deleteCard: (deckId, cardId) => dispatch(deleteCard(deckId, cardId)),
  clearCardErrors: () => dispatch(clearCardErrors())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CardIndex));
