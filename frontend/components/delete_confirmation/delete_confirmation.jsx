import React from 'react';

const deleteConfirmation = ({toggleAction, deleteAction, info}) => {
  return (
    <div className="confirm-delete">
      {console.error(info)}
      Are you sure you want to delete? &times;
      <button onClick={toggleAction}>Cancel</button>
      <button onClick={() => deleteAction(info)}>Delete</button>
    </div>
  );
};

export default deleteConfirmation;
