import React from 'react';
import { Link } from 'react-router-dom';

import DeckDetail from './deck_detail';

class DeckShow extends React.Component {

  // constructor(props){
  //   super(props);
  // }
  componentDidMount(){
    this.props.fetchDeck(this.props.match.params.deckId);
  }



  render() {
    const { deck, deleteDeck, fetchDecks, updateDeck, fetchDeck } = this.props;
    return (
      <div className="deck-show-container">
        <DeckDetail {...this.props} />
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
