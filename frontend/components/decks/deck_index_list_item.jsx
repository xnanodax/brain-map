import React from 'react';
import { Link } from 'react-router-dom';

const DeckListIndexItem = ({deck}) => (
  <Link to={`/deck/view/${deck.id}`}>
    <li className="deck-index-item-outer gray">
      <ul className="deck_index_item_border">
        <li className="list-title">{deck.title}</li>
        <li> {deck.cards.length} { deck.cards.length === 1 ? (<p className="inline">Card</p>) : (<p className="inline">Cards</p>) }</li>

        <li>Mastery: <div className="green">{deck.mastery_score}%</div></li>
      </ul>
    </li>
  </Link>

);

export default DeckListIndexItem;
