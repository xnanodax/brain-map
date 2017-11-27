import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TagIndex from './tag_index';

import {
  fetchTaggings,
  createTagging,
  deleteTagging,
  fetchAllTags,
  createTag
} from './../../actions/tagging_action';

// import { createTag } from './../../utils/tagging_util';

const mapStateToProps = (state, ownProps) => ({
  tags: Object.values(state.entities.tags),
  deckId: ownProps.match.params.deckId
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTaggings: (deckId) => dispatch(fetchTaggings(deckId)),
  createTagging: (deckId, tagId) => dispatch(createTagging(deckId, tagId)),
  deleteTagging: (deckId, tagId) => dispatch(deleteTagging(deckId, tagId)),
  fetchAllTags: (name) => dispatch(fetchAllTags(name)),
  createTag: (name) => dispatch(createTag(name))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TagIndex));
