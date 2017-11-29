import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currIndex: 0,
      displayAns: false,
      currentMastery: 0
    };
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

  flipCard() {
    const { remainingCards, currentCard } = this.state;
    return(e) => {
      this.setState({
        displayAns: !this.state.displayAns
      });
    };
  }

  nextCard() {
    return(e) => {
      this.setState({
        currIndex: this.state.currIndex + 1,
        displayAns: false
      });
    };
  }

  rotateCard(e) {
    if (this.card.classList.contains('rotate')) {
      this.card.classList.remove('rotate');
    } else {
      this.card.classList.add('rotate');
    }

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
            <button
              ref={(el) => {this.card = el;} }
              onClick={this.rotateCard.bind(this)}
              className="display-card flip">
              { displayAns === false ? card.keyword : card.body }
            </button>

            <button className="study-button" onClick={this.flipCard()}>
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
