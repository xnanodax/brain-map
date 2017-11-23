import React from 'react';
import DeckIndexItem from './deck_list_item';

class DeckIndex extends React.Component {
  componentDidMount() {
    const { fetchDecks } = this.props;
    fetchDecks();
  }

  render() {
    const { decks, fetchDeck } = this.props;

    return (
      <div className="deck-index-container">

        <ul className="deck_index_item_border deck-index-item-outer-title">

          <div className="deck-header-box">
            <div className="deck-header-box-item1">
              <li className="deck-header-font">Decks</li>
              <li> __Decks</li>
            </div>

            <div className="deck-header-box-item2">
              <i className="fa fa-plus fa-2x" aria-hidden="true"></i>
            </div>

          </div>
        </ul>

        <ul>
          {
            decks.map((deck =>
              <DeckIndexItem key={deck.id} deck={deck} />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default DeckIndex;
