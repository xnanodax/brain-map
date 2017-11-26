import React from 'react';
import { Link } from 'react-router-dom';

const DeckListIndexItem = ({deck}) => (
  <Link to={`/deck/${deck.id}`}>
    <li className="deck-index-item-outer">
      <ul className="deck_index_item_border">
        <li className="list-title">{deck.title}</li>
        <li> {deck.cards.length} Cards</li>
        <li>Mastery: <div className="green">{deck.mastery_percentage}%</div></li>
      </ul>
    </li>
  </Link>

);

export default DeckListIndexItem;
