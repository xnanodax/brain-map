import React from 'react';
import { Link } from 'react-router-dom';
import CardIndexListItem from './card_index_list_item';

class CardIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cards: this.props.cards };
  }

  componentDidMount() {
    const { fetchCards, deckId } = this.props;
    fetchCards(deckId);
  }

  componentWillReceiveProps(newProps) {
    const { fetchCards, deckId } = this.props;
    const newDeckId = newProps.match.params.deckId;
    if (deckId !== newDeckId) {
      fetchCards(newDeckId);
    }
  }

  render() {
    const { cards, deckId, updateCard, deleteCard, createCard } = this.props;

    const blankCard = { keyword: "tap", body: "tap to edit" };

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
                    num={idx+1}
                    key={idx}
                    card={card}
                    deckId={deckId}
                    updateCard={updateCard}
                    deleteCard={deleteCard} />)
              }
            </ul>



          </div>
      </div>
    );
  }
}


export default CardIndex;
