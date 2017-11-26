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
    const { cards, deckId, updateCard } = this.props;

    return (
      <div>
        <h3>Cards:</h3>
          <div className="card-container">
            <div className="table-row header wrapper">
              <div className="text-xsmall">#</div>
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
                    updateCard={updateCard} />)
              }
            </ul>
            <Link to={`/deck/view/${deckId}/add_card`}>
              Add Card
            </Link>

          </div>
      </div>
    );
  }
}


export default CardIndex;



// <div className="deck-index-container">
//
//   <ul className="deck_index_item_border deck-index-item-outer-title">
//
//     <div className="deck-header-box">
//       <div className="deck-header-box-item1">
//         <li className="deck-header-font">Decks</li>
//         <li> __Decks</li>
//       </div>
//
//       <div className="deck-header-box-item2">
//         <Link to="/deck/new">
//          <i className="fa fa-plus fa-2x" aria-hidden="true"></i>
//         </Link>
//       </div>
//
//     </div>
//   </ul>
//
//   <ul>
//     {
//       decks.map((deck =>
//         <DeckIndexItem key={deck.id} deck={deck} />
//       ))
//     }
//   </ul>
// </div>
