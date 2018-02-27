import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { deleteTagging } from './actions/tagging_action'

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

  window.store = store;
  window.dispatch = store.dispatch;
  window.getState = store.getState;

  ReactDOM.render(<Root store={store} />, root);
});

import { toggleModal } from './actions/modal_actions';
window.toggleModal = toggleModal;
window.deleteTagging = deleteTagging