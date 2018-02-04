import React from 'react';
import SidebarContainer from '../sidebar/sidebar_container';
import { Link } from 'react-router-dom';
import Confetti from 'react-dom-confetti';

const config = {
  angle: 90,
  spread: 60,
  startVelocity: 20,
  elementCount: 61,
  decay: 0.95
};

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      currIndex: 0,
      displayAns: false,
      displayConfetti: false,
    };
    this.rotateCardOutline = this.rotateCardOutline.bind(this);
    this.revealAns = this.revealAns.bind(this);
    this.play = this.play.bind(this);
    this.nextCard = this.play.bind(this);
  }

  // completed() {
  //   this.setState({displayConfetti: !this.state.displayConfetti});
  // }



  componentDidMount() {
    const { deckId, cards, fetchDeck, fetchCards, recordScore } = this.props;
    const { currIndex } = this.state;

    fetchDeck(deckId);
    fetchCards(deckId);
  }

  componentWillReceiveProps(newProps) {
    const { deckId, cards, recordScore } = this.props;
    const { currIndex } = this.state;
    if (newProps.deckId !== this.props.deckId) {
      this.setState({
        currIndex: 0,
        displayAns: false
      });

    }
  }

  revealAns(e) {
    return this.setState({
      displayAns: !this.state.displayAns
    });
  }

  rotateCardOutline(e) {
    if (this.card.classList.contains('rotate')) {
      return this.card.classList.remove('rotate');
    } else {
      return this.card.classList.add('rotate');
    }
  }

  rotateText(e){
    if (this.text.classList.contains('transform-text')) {
      return this.text.classList.remove('transform-text');
    } else {
      return this.text.classList.add('transform-text');
    }
  }

  // nextCard(e) {
  //   if (this.card.classList.contains('zoomOutDown')) {
  //     return this.card.classList.remove('zoomOutDown');
  //   } else {
  //     return ;
  //   }
  // }


  play(e) {
    this.revealAns(e);
    this.rotateCardOutline(e);
    this.rotateText(e);
  }

  recordingScore(e) {
    const { cards, recordScore } = this.props;
    const { currIndex } = this.state;
    recordScore(cards[currIndex].id, e.target.value);
    this.setState({
      currIndex: this.state.currIndex + 1,
      displayAns: false
    });
  }


  render() {
    const { cards, deck } = this.props;
    const { currIndex, displayAns } = this.state;
    const card = cards[currIndex];

    const revealAnsButton = (
      <button className="study-button" onClick={(e) => this.play(e)}>
        Reveal Answer!
      </button>
    );

    const instructions = (
      <div>
        How well do you know this?
      </div>
    );

    const buttonList = (
      <ul ref={(el) => {this.buttonList = el;}}
        className="button-list" >
        <button onClick={(e) => this.recordingScore(e)}
          className="study-button score-1"
          value="1">1 Not At All
        </button>

        <button onClick={(e) => this.recordingScore(e)}
          className="study-button score-2"
          value="2">2
        </button>

        <button onClick={(e) => this.recordingScore(e)}
          className="study-button score-3"
          value="3">3
        </button>

        <button onClick={(e) => this.recordingScore(e)}
          className="study-button score-4"
          value="4">4
        </button>

        <button onClick={(e) => this.recordingScore(e)}
          className="study-button score-5"
          value="5">5 Perfectly
        </button>
      </ul>
    );

    return (
      <div className="study-main">
        <div className="relative">
          <SidebarContainer currIndex={currIndex}/>
        </div>

        { currIndex < cards.length ? (
          <div className="relative-card">
            <div className='position-card'>
              <div ref={(el) => {this.card = el;} }
                onClick={(e) => this.play(e)}
                className="display-card flip">

                <div className="card-text"
                  ref={(el) => {this.text = el;} } >
                  { displayAns === false ? card.keyword : card.body }
              </div>
            </div>
          </div>



          <div className="button-control">
          { displayAns ? (
            <div className="button-control">
              {instructions}
              {buttonList}
            </div>
          ) : (
            revealAnsButton
          ) }
        </div>

        </div>
        ) : (
          <div className="finished-container">
            <h1>Woohoo!</h1>
            <h1> You finished! </h1>
              { deck && <Link to ={`/deck/view/${deck.id}`}>
                <button className="studyButton">
                  go back!
                </button>
              </Link> }

              <Link to ="/search">
                <button className="studyButton">
                  study other decks
                </button>
              </Link>

          </div>
        ) }
        </div>

    );
  }
}

export default Main;
