import {
  RECEIVE_SCORES,
  RECEIVE_SCORE
} from '../actions/study_actions';

import merge from 'lodash/merge';

const StudyReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SCORES:
      // return merge({}, action.decks);
    case RECEIVE_SCORE:
      // return merge({}, action.decks[]);
    default:
      return state;
  }
};

export default StudyReducer;
