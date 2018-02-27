import React from 'react';
import { BeatLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

const DeckListIndexItem = ({ deck, currentDeck}) => {
  const deckWord = deck.numCards === 1 ? (<p className="inline">Card</p>) : (<p className="inline">Cards</p>);
  const deckStyle = currentDeck ? "selected-deck-item" : "unselected-deck-item gray";
  return (
    deck ? (
      <Link to={`/deck/view/${deck.id}`}>
      <li className={deckStyle}>
        <ul className="deck-index-item-padding">
          <li className="list-title">{deck.title}</li>
          <li className="margin-top">{deck.numCards} {deckWord}</li>
          <li>Mastery: <div className="green">{deck.masteryScore}%</div></li>
        </ul>
      </li>
    </Link>
  ) : (
    <div className='loading'>
      <BeatLoader color={'#2dbe60'} />
    </div>
  )
  );


};

export default DeckListIndexItem;
