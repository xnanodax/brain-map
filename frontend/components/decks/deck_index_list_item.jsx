import React from 'react';
import { BarLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

const DeckListIndexItem = ({deck}) => (
  (deck ? (
    <Link to={`/deck/view/${deck.id}`}>
      <li className="deck-index-item-outer gray">
        <ul className="deck_index_item_border">
          <li className="list-title">{deck.title}</li>
            <li> {deck.numCards} { deck.numCards === 1 ? (<p className="inline">Card</p>) : (<p className="inline">Cards</p>) }</li>
          <li>Mastery: <div className="green">{deck.mastery_score}%</div></li>
        </ul>
      </li>
    </Link>
  ) : (
    <div className='loading'>
      <BarLoader
        color={'#2dbe60'}
        loading={this.state.loading}
      />
    </div>
  ) )


);



export default DeckListIndexItem;
