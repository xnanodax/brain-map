import {
  RECEIVE_SCORES,
  RECEIVE_SCORE
} from '../actions/study_actions';

import merge from 'lodash/merge';

const StudyReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SCORES:

    case RECEIVE_SCORE:

    default:
      return state;
  }
};

export default StudyReducer;
