import React from 'react';
import ClickToEdit from './../../click_to_edit/index.js';




const CardIndexListItem = ({num, card, deckId, updateCard, deleteCard, errors, cardIdError, clearCardErrors}) => (
  <div>
    <div className="container">

        <ul className="session-errors">
          {cardIdError === card.id && errors.map((error,idx) => <li key={idx}>{ error }</li>)}
        </ul>


      <div className="table-row wrapper">



        <div className="text-xsmall">

          <i className="fa fa-times fa-1x" aria-hidden="true" onClick={() => deleteCard(card.id)}>
          </i>&nbsp;&nbsp;
          {num}
        </div>

        <div className="text-short">
          <ClickToEdit className = "text-short"
            endEditing={
              (value) => {
                card.question = value;
                updateCard(card);
              }
            }
          >
          {card.question}
          </ClickToEdit>
        </div>

        <div className="text-long">
          <ClickToEdit className = "text-long"
            endEditing={
              (value) => {
                card.answer = value;
                updateCard(card);
              }
            }
          >
          {card.answer}
          </ClickToEdit>
        </div>

      </div>

    </div>
  </div>
);

export default CardIndexListItem;
