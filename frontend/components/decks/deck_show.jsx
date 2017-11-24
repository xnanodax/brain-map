import React from 'react';
import { Link } from 'react-router-dom';

import DeckDetail from './deck_detail';

class DeckShow extends React.Component {

  // constructor(props){
  //   super(props);
  // }
  componentDidMount(){
    console.log(this.props.deck);
    this.props.fetchDeck(this.props.match.params.deckId);
  }

  render() {
    const { deck, deleteDeck, fetchDecks } = this.props;
    return (
      <div className="deck-show-container">
        hello i'm the deck show
        <DeckDetail
          deck={ deck }
          deleteDeck={ deleteDeck }
          fetchDecks={ fetchDecks }
           />
      </div>
    );
  }

}

// const DeckShow = ({deck, formType}) => {
//
//   return (
//     <div>
//       <DeckDetail deck={deck} formType={formType}/>
//     </div>
//   );
// };


export default DeckShow;
