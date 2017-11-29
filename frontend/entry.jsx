import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// import * as StudyScoreUtil from './utils/studyscore_util';
// import { fetchScores, fetchScore, addScore, recordScore } from './actions/study_actions';
// window.fetchScores = fetchScores;
// window.fetchScore = fetchScore;
// window.addScore = addScore;
// window.recordScore = recordScore;
// window.fetchStudyScores = StudyScoreUtil.fetchStudyScores;
// window.fetchStudyScore = StudyScoreUtil.fetchStudyScore;
// window.createStudyScore = StudyScoreUtil.createStudyScore;
// window.updateStudyScore = StudyScoreUtil.updateStudyScore;

// import { signup, login, logout } from './actions/session';
// // window.signup = signup;
// // window.login = login;
// window.logout = logout;

import * as searchAPIUtil from './utils/search_util';
window.searchTags = searchAPIUtil.searchTags;
window.searchDecks = searchAPIUtil.searchDecks;

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');

  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: {currentUser: window.currentUser}
    };

    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.dispatch = store.dispatch;
  window.getState = store.getState;


  ReactDOM.render(<Root store={store} />, root);
});
