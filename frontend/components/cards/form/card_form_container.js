import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CardForm from './card_form';
import { createCard } from './../../../actions/card_actions';

const mapStateToProps = (state, ownProps) => {
  const lastId = Math.max(...Object.keys(state.entities.cards));
  return ({
    card: state.entities.cards[lastId],
    deckId: ownProps.match.params.deckId,
    errors: state.errors.cards
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  createCard: (deckId, card) => dispatch(createCard(deckId, card))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps)(CardForm));
