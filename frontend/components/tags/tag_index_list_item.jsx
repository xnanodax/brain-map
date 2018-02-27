import React from 'react';
import { Link } from 'react-router-dom';

const TagIndexListItem = ({deckId, tag, deleteTagging}) => (
  
  <li className = "tag-index-list-item flexbox-row">
  { console.log("--------------")}
  { console.log(deckId) }
  { console.log(tag.id) }
  { console.log(tag.name) }
  
    <div className="tag_name">
      { tag.name }
    </div>

    <span onClick={() => deleteTagging(deckId, tag.id)}>
      <i className="fa fa-times fa-1x green-dark-hover"
        aria-hidden="true"></i>      
    </span>
  </li>
);

export default TagIndexListItem;
