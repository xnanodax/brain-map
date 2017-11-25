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
                <button className="deck-show-attributes-button"><i class="fa fa-play" aria-hidden="true"></i>&nbsp;&nbsp;Study</button>
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
