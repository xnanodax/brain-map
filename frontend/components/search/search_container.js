import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchDeckForm from './search_deck_form';

import { searchDecks } from '../../actions/deck_actions';
import { searchTags } from '../../actions/tagging_action';

const mapStateToProps = (state, ownProps) => ({
  searchResults: state.entities.searchResults
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  searchDecks: title => dispatch(searchDecks(title)),
  searchTags: name => dispatch(searchTags(name))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchDeckForm));
