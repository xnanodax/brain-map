import React from 'react';
import { Link } from 'react-router-dom';

const TagIndexListItem = ({deckId, tag, deleteTagging}) => (
  <li className = "tag-index-list-item">
    <div className="tag_name">
      { tag.name }
    </div>

    <i className="fa fa-times fa-1x"
      aria-hidden="true"
      onClick={() => deleteTagging(deckId, tag.id)}>
    </i>

  </li>
);

export default TagIndexListItem;
