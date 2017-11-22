import React from 'react';

class DeckIndex extends React.Component {
  componentDidMount() {
    const { fetchDecks } = this.props;
    fetchDecks();
  }

  render() {
    const { decks, fetchDeck } = this.props;

    return (
      <div className="deck_index_container">
        I am the deck container
        {
          decks.map(deck =>
            <li key={deck.id}>
              {deck.title}
            </li>
          )
        }
      </div>
    );
  }
}

export default DeckIndex;
