import React from 'react';
import { Link } from 'react-router-dom';

import DeckDetail from './deck_detail';
import NavBarLoggedInContainer from '../navbar_log/navbar_logged_in_container';

class DeckShow extends React.Component {

  componentDidMount(){
    const { fetchDeck, match, deckId } = this.props;
    fetchDeck(deckId);
  }



  componentWillReceiveProps(newProps) {
    const { deck, deckId, fetchDeck, clearDeckErrors, timeUpdate } = newProps;
    console.error("componentWillReceiveProps! outside");
    console.error("old", this.props, "new", newProps);
    console.error(timeUpdate !== newProps.timeUpdate);
    if (newProps.deckId !== deckId) {
      clearDeckErrors();
      fetchDeck(newProps.deckId);
    } else if (newProps.timeUpdate && timeUpdate !== newProps.timeUpdate) {
      console.error("componentWillReceiveProps! inside");
      newProps.fetchDeck(newProps.deckId);
    }
  }

  render() {
    return (

      <div className="deck-show-container">
        <DeckDetail {...this.props} />
      </div>
    );
  }

}

export default DeckShow;
