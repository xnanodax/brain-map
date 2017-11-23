import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DeckShow from './deck_show';

import {
  fetchDecks,
  fetchDeck,
  createDeck,
  updateDeck
} from '../../actions/deck_actions';

const mapStateToProps = (state, ownProps) => {
  // let formType = "new";
  // let deck = { title: "" };
  // if (ownProps.match.path === '/deck/:deckId/') {
  //   formType = "edit";
  // console.log(ownProps.match.params.deckId)
  //   let deck = state.posts[ownProps.match.params.deckId];
  // // }
  // return { deck };
  const deck = state.entities.decks[ownProps.match.params.deckId];
  return { deck };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action = (ownProps.match.path === '/:deckId/edit') ? updateDeck : createDeck;
  return {
    fetchDeck: (id) => dispatch(fetchDeck(id)),
    action: (deck) => dispatch(action(deck))
   };
  // return {};
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DeckShow));
