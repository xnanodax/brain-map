import React from 'react';
import DeckIndexListItem from './deck_index_list_item';
import { Link } from 'react-router-dom';

class DeckIndex extends React.Component {
  componentDidMount() {
    const { fetchDecks } = this.props;
    fetchDecks();
  }

  componentWillReceive(newProps) {
    console.log(newProps);
  }

  componentWillUnmount() {
    this.props.clearDecks();
  }

  render() {
    const { decks, deckCount } = this.props;

    return (
          <div className="deck-index-container">
            <ul className="deck_index_item_border deck-index-item-outer-title">
              <div className="deck-header-box">
                <div className="deck-header-box-item1">
                  <li className="deck-header-font">Your Decks</li>
                  <li> { deckCount } { deckCount === 1 ? (<p className="inline">Deck</p>) : (<p className="inline">Decks</p>) }</li>
                </div>

                <div className="deck-header-box-item2">
                  <Link to="/deck/new">
                   <i className="fa fa-plus fa-2x" aria-hidden="true"></i>
                  </Link>
                </div>

              </div>
            </ul>

            <ul className="gray">
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
