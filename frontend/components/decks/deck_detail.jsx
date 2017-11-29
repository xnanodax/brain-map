import React from 'react';
import { Link } from 'react-router-dom';
import { BarLoader } from 'react-spinners';
import CardIndexContainer from './../cards/index/card_index_container';
import TagIndexContainer from './../tags/tag_index_container';
import ClickToEdit from './../click_to_edit/index.js';
import ReactConfirmAlert, { confirmAlert } from 'react-confirm-alert';


class DeckDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      deck: this.props.deck,
      showDialog: false,
    };
  }

  // componentWillReceiveProps(newProps) {
  //   this.props.___ !== newProps.deckO
  // }

  handleDeleteAfterRedirect(id) {
    const { deleteDeck, history } = this.props;
    return (e) => {
      deleteDeck(id)
        .then(() =>history.push("/deck"));
    };
  }

  render() {
    const { deckId, deck, updateDeck } = this.props;
    return (
      <div className="deck-show">

        <div className="confirm-delete">
          {
            this.state.showDialog &&
            <ReactConfirmAlert
              message={`Are you sure to delete?`}
              confirmLabel="Confirm"
              cancelLabel="Cancel"
              onConfirm={this.handleDeleteAfterRedirect(deckId)}
              onCancel={() => this.setState({showDialog: false})}
              />
            }
          </div>

        { deck ? (
          <div className="deck-show-item">
            <ul className="deck-show-item-header">

              <ClickToEdit
                className='deck-show-item-header-text'
                endEditing={
                  (value) => {
                  deck.title = value;
                  updateDeck(deck);
                  }
                }
              >
                {deck.title}
              </ClickToEdit>



              <div className="deck-show-header-links">

                <i
                  className="fa fa-trash-o fa-2x"
                  aria-hidden="true"
                  onClick = {() => this.setState({showDialog: true})} >
                </i>

              </div>
            </ul>

            <ul className ="deck-show-attributes">

              {deck.cards.length !== 0 ? (
                <li>
                  <Link to={`/study/${deckId}`} >
                    <button
                      disabled={ deck.cards.length === 0}
                      className="deck-show-attributes-button">
                      <i className="fa fa-play" aria-hidden="true">
                      </i>
                      &nbsp;&nbsp;Study
                    </button>
                  </Link>
                </li>
              ) : (
                <div className="green">Add cards to study!</div>
              ) }

              <li>
                <ul className="attributes-side-by-side1">
                  <h3>Mastery:</h3>
                  <div className="percentageColor">{deck.mastery_score}%</div>
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
