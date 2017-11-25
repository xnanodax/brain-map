import React from 'react';
import { Link } from 'react-router-dom';
import { BarLoader } from 'react-spinners';
import CardIndexContainer from './../cards/index/card_index_container';
// import ClickToEdit from 'react-click-to-edit';
import ClickToEdit from './../click_to_edit/index.js';

class DeckDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      deck: this.props.deck
    };
  }


  // componentWillReceiveProps(newProps){
  //   console.log("component will receive new props", this.state);
  //   const newState = {
  //     loading: true,
  //     deck: {title: newProps}
  //   };
  //   console.log("newState", newState);
  //   this.setState(newState);
  // }

  // componentWillReceiveProps(newProps) {
  //   const { fetchDeck } = this.props;
  //   const currDeckId = this.props.match.params.deckId;
  //   const newDeckId = newProps.match.params.deckId;
  //   if (currDeckId !== newDeckId) {
  //     fetchDeck(newDeckId);
  //   }
  // }

  handleDeleteAfterRedirect(id) {
    return (e) => {
      this.props.deleteDeck(id).then(()=>this.props.history.push("/deck"));
    };
  }



  render() {
    const { deck } = this.props;
    return (
      <div className="deck-show">
        { deck ? (
          <div className="deck-show-item">
            <ul className="deck-show-item-header">

              <ClickToEdit
                className='deck-show-item-header-text'
                field='title'
                endEditing={
                  (value) => {
                  this.props.deck.title = value;
                  this.props.updateDeck(this.props.deck);
                  }
                }
              >
                {deck.title}
              </ClickToEdit>

              <div className="deck-show-header-links">
                <i
                  className="fa fa-trash-o"
                  aria-hidden="true"
                  onClick={this.handleDeleteAfterRedirect(deck.id)}>
                </i>


                  <i className="fa fa-cog" aria-hidden="true"></i>

              </div>
            </ul>

            <ul className ="deck-show-attributes">
              <li>
                <button className="deck-show-attributes-button"><i className="fa fa-play" aria-hidden="true"></i>&nbsp;&nbsp;Study</button>
              </li>

              <li>
                <ul className="attributes-side-by-side1">
                  <h3>Mastery:</h3>
                  <div className="percentageColor">{deck.mastery_percentage}%</div>
                </ul>
              </li>
              <li>
                <h3>Tags:</h3>
              </li>

              <ul className="card-list">
                  <CardIndexContainer />
              </ul>
            </ul>
          </div>

          ) : (
            <div className='loading'>
              <BarLoader
                color={'#2dbe60'}
                loading={this.state.loading}
              />
            </div>
          )
        }
      </div>
    );
  }
}

export default DeckDetail;

// <li>
//     <h3>Description:</h3>
//     havent made this yet.
// </li>

// {
//   deck.cards.map(card =>
//     <li key={card.id}>{card.keyword}</li>
//   )
// }
