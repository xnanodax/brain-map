import React from 'react';
import { Link } from 'react-router-dom';

const SearchListItem = ({searchItem}) => (
  <li className="search-list-item">

    <Link to={`/study/${searchItem.id}`} >
      <div className="result-spacing">
        <div class="search-text">
          {searchItem.title}
        </div>
        <button className="button-search-study">
          <i className="fa fa-play" aria-hidden="true"></i>
          &nbsp;&nbsp;Study
        </button>
      </div>
    </Link>
  </li>
);

export default SearchListItem;
