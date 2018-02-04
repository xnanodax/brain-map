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
    const { fetchCards, deckId, clearCardErrors } = this.props;
    const newDeckId = newProps.match.params.deckId;
    if (deckId !== newDeckId) {
      fetchCards(newDeckId);
      clearCardErrors();
    } else if (newProps.errors.length > 0 && newProps.errors.length !== this.props.errors.length) {
      fetchCards(deckId);
    }
  }

  render() {
    const { cards, deckId, updateCard, deleteCard, createCard, errors, cardIdError } = this.props;

    const blankCard = { keyword: "tap to edit", body: "tap to edit" };

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
