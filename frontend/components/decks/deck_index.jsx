import React from 'react';
import DeckIndexListItem from './deck_index_list_item';
import { Link } from 'react-router-dom';

class DeckIndex extends React.Component {
  componentDidMount() {
    const { fetchDecks } = this.props;
    fetchDecks();
  }


  render() {
    const { decks, count } = this.props;

    return (
          <div className="deck-index-container">
            <ul className="deck_index_item_border deck-index-item-outer-title">
              <div className="deck-header-box">
                <div className="deck-header-box-item1">
                  <li className="deck-header-font">Decks</li>
                  <li> { count } { count === 1 ? (<p>Deck</p>) : (<p>Decks</p>) }</li>
                </div>

                <div className="deck-header-box-item2">
                  <Link to="/deck/new">
                   <i className="fa fa-plus fa-2x" aria-hidden="true"></i>
                  </Link>
                </div>

              </div>
            </ul>

            <ul>
              {
                decks.map((deck, idx) =>
                  <DeckIndexListItem key={idx} deck={deck} />
                )
              }
            </ul>
          </div>
    );
  }
}

export default DeckIndex;
