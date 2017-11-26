import {
  RECEIVE_TAGGINGS,
  RECEIVE_TAGGING,
  REMOVE_TAGGING
} from './../actions/tagging_action';

import merge from 'lodash/merge';

const TaggingReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TAGGINGS:
      return merge({}, state, action.taggings);
    case RECEIVE_TAGGING:
      return merge({}, state, action.tagging);
    case REMOVE_TAGGING:
      const newState = merge({}, state);
      const deleteId = action.tagging.id;
      delete newState[deleteId];
      return newState;
    default:
      return state;
  }
};

export default TaggingReducer;
