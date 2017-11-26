import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CardForm from './card_form';
import { createCard } from './../../../actions/card_actions';

const mapStateToProps = (state, ownProps) => ({
  deckId: ownProps.match.params.deckId
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createCard: (deckId, card) => dispatch(createCard(deckId, card)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps)(CardForm));
