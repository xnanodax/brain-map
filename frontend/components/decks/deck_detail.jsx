import React from 'react';
import { Link } from 'react-router-dom';
import { BarLoader } from 'react-spinners';
import CardIndexContainer from './../cards/index/card_index_container';
// const cardList = () => (
//
// );

class DeckDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }


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
              <h1>{deck.title}</h1>
              {deck.id}
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
              <li>Mastery: {deck.mastery_percentage}%</li>
              <li>Cards: __</li>
              <ul className="card-list">
                Card List:
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

// {
//   deck.cards.map(card =>
//     <li key={card.id}>{card.keyword}</li>
//   )
// }
