import React from 'react';
import { Link } from 'react-router-dom';

const DeckShow = ({ deck, formType}) => (
  <div className="deck-show">
    {deck.title}
    {formType}
  </div>
);

export default DeckShow;
