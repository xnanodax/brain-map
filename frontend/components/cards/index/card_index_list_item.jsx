import React from 'react';

const CardIndexListItem = ({card}) => (
  <div>
    <div class="container">
      <div class="table-row wrapper">
        <div class="text-short">{card.keyword}</div>
        <div class="text-long">{card.body}</div>
      </div>

    </div>
  </div>
);

export default CardIndexListItem;
