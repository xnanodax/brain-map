import {
  RECEIVE_TAGGINGS,
  RECEIVE_TAGGING,
  REMOVE_TAGGING,
  RECEIVE_TAGGING_ERRORS
} from './../actions/tagging_action';

import merge from 'lodash/merge';

const TaggingsErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TAGGINGS:
      return [];
    case RECEIVE_TAGGING:
      return [];
    case REMOVE_TAGGING:
      return [];
    case RECEIVE_TAGGING_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default TaggingsErrorReducer;
