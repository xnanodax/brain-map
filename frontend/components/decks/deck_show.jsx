import React from 'react';
import { Link } from 'react-router-dom';

import DeckDetail from './deck_detail';

class DeckShow extends React.Component {

  componentDidMount(){
    const { fetchDeck, match, deckId } = this.props;
    fetchDeck(deckId);
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
