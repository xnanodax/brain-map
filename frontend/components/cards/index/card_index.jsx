import React from 'react';
import { Link } from 'react-router-dom';
import CardIndexListItem from './card_index_list_item';

class CardIndex extends React.Component {

  componentDidMount() {
    const { fetchCards, deckId, clearCardErrors } = this.props;
    clearCardErrors();
    fetchCards(deckId);
  }

  componentWillUnmount() {
    this.props.clearCardErrors();
  }

  componentWillReceiveProps(newProps) {
    const { fetchCards, deckId, clearCardErrors, timeUpdate } = this.props;
    console.warn("old", this.props.timeUpdate, "new", newProps.timeUpdate);

    console.warn("cards", timeUpdate !== newProps.timeUpdate);

    const newDeckId = newProps.match.params.deckId;
    if (deckId !== newDeckId) {
      clearCardErrors();
      fetchCards(newDeckId);
    } else if (timeUpdate !== newProps.timeUpdate) {
      fetchCards(deckId);
    }
  }

  render() {
    const { cards, deckId, updateCard, deleteCard, createCard, errors, cardIdError } = this.props;

    const blankCard = { question: "tap to edit", answer: "tap to edit" };

    return (
      <div>
        <div className="card-header">

          <i className="fa fa-plus"
            aria-hidden="true"
            onClick={() => createCard(deckId, blankCard)}></i>
          <h3>Cards:</h3>
        </div>

          <div className="card-container">
            <div className="table-row header wrapper">
              <div className="text-xsmall">&nbsp;#</div>
              <div className="text-short">Question</div>
              <div className="text-long">Answer</div>
            </div>

            <ul>
              {
                cards.map((card, idx) =>
                  <CardIndexListItem
                    key={idx}
                    num={idx+1}
                    card={card}
                    deckId={deckId}
                    updateCard={updateCard}
                    deleteCard={deleteCard}
                    errors = {errors}
                    cardIdError = {cardIdError} />)
              }
            </ul>



          </div>
      </div>
    );
  }
}


export default CardIndex;
