import React from 'react';
import { Link } from 'react-router-dom';

const TagIndexListItem = ({deckId, tag, deleteTagging}) => (
  
  <li className = "tag-index-list-item flexbox-row">
    <div className="tag_name">
      { tag.name }
    </div>

    <span onClick={() => deleteTagging(deckId, tag.taggingId)}>
      <i className="fa fa-times fa-1x green-dark-hover"
        aria-hidden="true"></i>      
    </span>
  </li>
);

export default TagIndexListItem;
