import React from 'react';
import { Link } from 'react-router-dom';

const DeckListIndexItem = ({deck}) => (
  <Link to={`/deck_feed/${deck.id}`}>
    <li className="deck-index-item-outer">
      <ul className="deck_index_item_border">
        <li className="list-title">{deck.title}</li>
        <li> __ Cards</li>
        <li>Mastery: {deck.mastery_percentage}%</li>
      </ul>
    </li>
  </Link>

);

export default DeckListIndexItem;
