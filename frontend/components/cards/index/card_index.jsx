import React from 'react';
import { Link } from 'react-router-dom';
import CardIndexListItem from './card_index_list_item';

class CardIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cards: this.props.cards };
  }

  componentDidMount() {
    const { fetchCards } = this.props;
    const currDeckId = this.props.match.params.deckId;
    fetchCards(currDeckId);
  }

  componentWillReceiveProps(newProps) {
    const { fetchCards } = this.props;
    const currDeckId = this.props.match.params.deckId;
    const newDeckId = newProps.match.params.deckId;
    if (currDeckId !== newDeckId) {
      fetchCards(newDeckId);
    }
  }

  render() {
    const { cards } = this.props;

    return (
      <div>
        <h3>Card:</h3>
          <div class="card-container">
            <div class="table-row header wrapper">
              <div class="text-short">Question</div>
              <div class="text-long">Answer</div>
            </div>

            <ul>
              {
                cards.map(card => <CardIndexListItem card = { card } />)
              }
            </ul>

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
