import React from 'react';

const deleteConfirmation = ({toggleAction, deleteAction, deckId}) => {
  return (
      <div className="delete-container">
        <div className="delete-x cursor gray" onClick={toggleAction}>&times;</div>
        <div className="delete-content flexbox-column">

          <ul className="delete-header flexbox-row">

            <i className="far fa-trash-alt fa-2x green-no-hover"
              aria-hidden="true">
            </i>
          </ul>

          <div className="deck-header-font underline">Delete Deck</div>

          <div className="gray">Are you sure you want to delete this deck?</div>

          <div className="delete-buttons flexbox-row"> 
            <button onClick={toggleAction}>Cancel</button>
            <button onClick={() => deleteAction(deckId)}>Delete</button>
          </div>
        </div>
    </div>
  );
};

export default deleteConfirmation;
