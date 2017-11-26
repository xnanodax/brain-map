import React from 'react';
import { Link } from 'react-router-dom';
import { BarLoader } from 'react-spinners';
import CardIndexContainer from './../cards/index/card_index_container';
import TagIndexContainer from './../tags/tag_index_container';
import ClickToEdit from './../click_to_edit/index.js';

class DeckDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      deck: this.props.deck
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

              <ClickToEdit
                className='deck-show-item-header-text'
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
              <ul className="tag-list">
                  <TagIndexContainer />
              </ul>

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
