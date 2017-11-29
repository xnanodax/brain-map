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
    const { cards, deckId, updateCard, deleteCard } = this.props;

    return (
      <div>
        <div className="card-header">

          <Link to={`/deck/view/${deckId}/new`}>
            <i className="fa fa-plus" aria-hidden="true"></i>              
          </Link>
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
