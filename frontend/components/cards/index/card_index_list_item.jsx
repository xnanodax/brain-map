import React from 'react';
import ClickToEdit from './../../click_to_edit/index.js';

const CardIndexListItem = ({card, deckId, updateCard}) => (
  <div>
    <div class="container">
      <div class="table-row wrapper">
        <div class="text-short">
          <ClickToEdit
            endEditing={
              (value) => {
                card.keyword = value;
                updateCard(deckId, card);
              }
            }
          >
          {card.keyword}
          </ClickToEdit>
        </div>

        <div class="text-long">
          <ClickToEdit
            endEditing={
              (value) => {
                card.body = value;
                updateCard(deckId, card);
              }
            }
          >
          {card.body}
          </ClickToEdit>
        </div>
      </div>

    </div>
  </div>
);

export default CardIndexListItem;
