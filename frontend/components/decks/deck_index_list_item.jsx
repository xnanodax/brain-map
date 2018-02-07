import React from 'react';
import { BeatLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

const DeckListIndexItem = (props) => {
  const deck = props.deck;
  const deckWord = deck.numCards === 1 ? (<p className="inline">Card</p>) : (<p className="inline">Cards</p>);

  return (
    deck ? (
    <Link to={`/deck/view/${deck.id}`}>
      <li className="deck-index-item-container gray">
        <ul className="deck-index-item-ul">
          <li className="list-title">{deck.title}</li>
          <li className="margin-top">{deck.numCards} {deckWord}</li>
          <li>Mastery: <div className="green">{deck.mastery_score}%</div></li>
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
