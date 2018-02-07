import React from 'react';
import ClickToEdit from './../../click_to_edit/index.js';




const CardIndexListItem = ({num, card, deckId, updateCard, deleteCard, errors, cardIdError, clearCardErrors}) => (
  <div>
    <div className="container">

        <ul className="errors">
          {cardIdError === card.id && errors.map((error,idx) => <li key={idx}>{ error }</li>)}
        </ul>


      <div className="table-row wrapper">



        <div className="text-xsmall">
          <span onClick={() => deleteCard(card.id)}>
            <i className="fas fa-times green-dark-hover" aria-hidden="true">
            </i>&nbsp;&nbsp;
          </span>
          {num}
        </div>

        <div className="text-short">
          <ClickToEdit className = "text-short overflow"
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
          <ClickToEdit className = "text-long overflow"
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
