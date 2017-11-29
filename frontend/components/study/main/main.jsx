import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currIndex: 0,
      displayAns: false,
      currSum: 0,
      currentMastery: 0
    };
    this.rotateCard = this.rotateCard.bind(this);
    this.revealAns = this.revealAns.bind(this);
    this.play = this.play.bind(this);
  }

  componentDidMount() {
    const { deckId, cards, fetchDeck, fetchCards } = this.props;
    fetchDeck(deckId);
    fetchCards(deckId);
      // .then((cards) => console.log(cards));
  }

  componentWillReceiveProps(newProps) {
    if (newProps.deckId !== this.props.deckId) {
      this.setState({
        currIndex: 0,
        displayAns: false
      });
    }
  }

  revealAns(e) {
    const { remainingCards, currentCard } = this.state;
    return this.setState({
      displayAns: !this.state.displayAns
    });
  }


  rotateCard(e) {
    if (this.card.classList.contains('rotate')) {
      return this.card.classList.remove('rotate');
    } else {
      return this.card.classList.add('rotate');
    }

  }

  play(e) {
    this.revealAns(e);
    this.rotateCard(e);
  }

  nextCard() {
    return(e) => {
      this.setState({
        currIndex: this.state.currIndex + 1,
        displayAns: false
      });
    };
  }

  recordScore(e) {
    e.preventDefault();
    const { cards, recordScore } = this.props;
    const { currIndex } = this.state;

    recordScore(cards[currIndex].id, e.target.value);
  }


  render() {
    const { cards } = this.props;
    const { currIndex, displayAns } = this.state;
    const card = cards[currIndex];

    return (
      <div className="study-main-container">
        { currIndex < cards.length - 1 ? (
          <div>
          <div className='relative-card'>
            <div
              ref={(el) => {this.card = el;} }
              onClick={(e) => this.play(e)}
              className="display-card flip">
              <div className="index">{ displayAns === false ? card.keyword : card.body }</div>
            </div>
          </div>

            <button className="study-button" onClick={(e) => this.play(e)}>
              Reveal Answer!
            </button>

            <div className="button-control">
              <div>
                How well do you know this?
              </div>

              <ul className="button-list">
                <button value="1"
                  onClick={(e) => this.recordScore(e)}
                  className="study-button score-1">
                  1
                  Not at all
                </button>

                <button value="2"
                  onClick={(e) => this.recordScore(e)}
                  className="study-button score-2">
                  2
                </button>

                <button value="3"
                  onClick={(e) => this.recordScore(e)}
                  className="study-button score-3">
                  3
                </button>

                <button value="4"
                  onClick={(e) => this.recordScore(e)}
                  className="study-button score-4">
                  4
                </button>

                <button value="5"
                  onClick={(e) => this.recordScore(e)}
                  className="study-button score-5">
                  5
                  Perfectly
                </button>
              </ul>


              <button className="study-button"
                onClick={this.nextCard()}>
                Next!
              </button>

            </div>
          </div>
        ) : ("you finished!") }
        </div>

    );
  }
}

export default Main;
