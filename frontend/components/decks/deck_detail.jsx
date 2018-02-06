import React from 'react';
import { Link } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import CardIndexContainer from './../cards/index/card_index_container';
import TagIndexContainer from './../tags/tag_index_container';
import ClickToEdit from './../click_to_edit/index.js';
import ReactConfirmAlert, { confirmAlert } from 'react-confirm-alert';


class DeckDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: this.props.deck,
      displayDeleteConfirm: false,
      addedNewCard: false,
      loading: true
    };
  }

  handleDeleteAfterRedirect(id) {
    const { deleteDeck, history } = this.props;
    return (e) => deleteDeck(id);
  }

  renderErrors() {
    return (<ul className="errors">
      {this.props.errors.map((error,idx) => <li key={idx}>{ error }</li>)}
    </ul>);
  }

  render() {
    const { deckId, deck, updateDeck, numCards, errors, clearDeckErrors } = this.props;

    return (
      <div className="deck-show">

        <div className="confirm-delete">
          {
            this.state.displayDeleteConfirm &&
            <ReactConfirmAlert
              message={`Are you sure to delete?`}
              confirmLabel="Confirm"
              cancelLabel="Cancel"
              onConfirm={this.handleDeleteAfterRedirect(deckId)}
              onCancel={() => this.setState({displayDeleteConfirm: false})}
              />
            }
          </div>

        { deck ? (
          <div className="deck-show-item">
            { this.renderErrors() }

            <ul className="deck-show-item-header">



              <ClickToEdit
                className='deck-show-item-header-text'
                endEditing={
                  (value) => {
                  deck.title = value;
                  updateDeck(deck).then(() => clearDeckErrors());
                  }
                }
              >
                {deck.title}
              </ClickToEdit>



              <div className="deck-show-header-links">

                <span onClick = {() => this.setState({displayDeleteConfirm: true})}>
                  <i
                    className="far fa-trash-alt fa-2x green-no-hover"
                    aria-hidden="true">
                  </i>
                </span>

              </div>
            </ul>

            <ul className ="deck-show-attributes">

              {numCards > 0 ? (
                <li>
                  <Link to={`/study/${deckId}`} >
                    <button
                      className="deck-show-attributes-button">
                      <i className="fa fa-play" aria-hidden="true">
                      </i>
                      &nbsp;&nbsp;Study
                    </button>
                  </Link>
                </li>
              ) : (
                <div className="green-no-hover">Add cards to study!</div>
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
              <BeatLoader
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
