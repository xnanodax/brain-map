import React from 'react';
import DeckIndexListItem from './deck_index_list_item';
import { Link } from 'react-router-dom';

class DeckIndex extends React.Component {
  componentDidMount() {
    const { fetchDecks } = this.props;
    fetchDecks();
  }

  componentWillUnmount() {
    this.props.clearDecks();
  }

  render() {
    const { decks, deckCount } = this.props;
    const deckWord = deckCount === 1 ? (<p className="inline">Deck</p>) : (<p className="inline">Decks</p>);

    return (
          <div className="deck-index-container">
            <ul className="deck-index-title deck-index-item-ul">
              <div className="deck-header-box flexbox-row">
                <ul className="deck-header-box-text flexbox-column">
                  <li className="deck-header-font">Your Decks</li>
                  <li> { deckCount } {deckWord} </li>
                </ul>

                <div>
                  <Link to="/deck/new">
                   <i className="fas fa-plus fa-2x green-dark-hover" aria-hidden="true"></i>
                  </Link>
                </div>

              </div>
            </ul>

            <ul className="gray">
              { decks.map((deck) => <DeckIndexListItem key={deck.id} deck={deck}/>) }
            </ul>
          </div>
    );
  }
}

export default DeckIndex;
