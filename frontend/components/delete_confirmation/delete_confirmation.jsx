import React from 'react';

const deleteConfirmation = ({toggleAction, deleteAction, deckId}) => {
  return (
    <div className="confirm-delete">
      Are you sure you want to delete? &times;
      <button onClick={toggleAction}>Cancel</button>
      <button onClick={() => deleteAction(deckId)}>Delete</button>
    </div>
  );
};

export default deleteConfirmation;
