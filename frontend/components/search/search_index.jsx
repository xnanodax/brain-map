import React from 'react';
import SearchIndexItem from './search_index_item';

const searchIndex = ({ firstTime, searchItems, searchVal, clearState }) => {
  if (searchVal === "") return null;
  let deckResults;

  if (searchItems.length === 0 && !firstTime) {
    deckResults =
      <ul>
        <li>no matching decks</li>
      </ul>;

  } else if (searchItems.length > 0) {
    deckResults =
      <ul>
        {searchItems.map((searchItem, idx) => <SearchIndexItem key={idx} searchItem={searchItem}/>)}
      </ul>;
  }

  return (
    <div>
      {deckResults}
    </div>
  );
};

export default searchIndex;
