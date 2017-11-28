import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   currentCard: this.props.cards.shift(),
    //   display: this.state.currentCard.keyword,
    //   remainingCards: this.props.cards
    // };

    this.state = {
      currentCard: "starting",
      display: "starting",
      remainingCards: this.props.cards
    };
  }

  componentDidMount() {
    const { deckId, cards, fetchDeck, fetchCards } = this.props;
    fetchDeck(deckId);
    fetchCards(deckId);

    const nextCard = this.state.remainingCards[0];

    this.setState({
      currentCard: nextCard,
      display: nextCard.keyword,
      remainingCards: this.state.remainingCards.slice(1)
    });
  }

  componentDidUpdate() {
    const { deckId, fetchDeck, cards, fetchCards } = this.props;
    const newCard = this.state.remainingCards[0];
    if (this.state.display === undefined ) {
      this.setState({
        currentCard: newCard,
        display: newCard.keyword,
        remainingCards: this.state.remainingCards.slice(1)
      });
    }
  }

  componentWillReceiveProps(newProps) {
    // console.log("newProps", newProps);
  //   const { deckId, fetchDeck, cards, fetchCards, fetchCard } = newProps;
  //   // fetchDeck(deckId);
  //   // fetchCards(deckId);
  //   // this.setState({
  //   //   currentCard: newProps.cards.shift(),
  //   //   remainingCards: newProps.cards
  //   // });
  //
  //   // this.setState({
  //   //   display: this.state.currentCard.keyword
  //   // });
  //   if (this.state.remainingCards.length === newProps.cards.length ) {
  //     this.setState({
  //       display: newProps.cards.keyword
  //     });
  //   }
  //
  }

  flipCard() {
    const { remainingCards, currentCard } = this.state;
    return(e) => {
      console.log("flip!");
      this.setState({
        currentCard: this.state.currentCard,
        display: this.state.display === this.state.currentCard.keyword ? this.state.currentCard.body : this.state.currentCard.keyword,
        remainingCards: this.state.remainingCards
      });
    };
  }

  nextCard() {
    return(e) => {
      console.log("next!");
      const nextCard = this.state.remainingCards[0];
      console.log('next Card', nextCard);
      this.setState({
        currentCard: nextCard,
      });

      this.setState({
        remainingCards: this.state.remainingCards.slice(1)
      });

      this.setState({
        display: this.state.currentCard.keyword
      });
      console.log('state', this.state);
    };
  }

  recordScore(e) {
    e.preventDefault();
    const { recordScore } = this.props;

    recordScore(this.state.currentCard.id, e.target.value);
  }


  // this.state.allIds.length === 0
  // <MainDone />
  render() {
    // console.log("state", this.state);
    const { cards } = this.props;
    return (
      <div className="study-main-container">
        {this.state.currentCard ? (
          <div>
            <div className="display-card">
              {this.state.display}
            </div>

            <button className="study-button" onClick={this.flipCard()}>
              Reveal Answer!
            </button>

            <div className="button-control">
              <div>
                How well do you know this?
              </div>
              <ul className="button-list">
                <button value="1" onClick={(e) => this.recordScore(e)} className="study-button score-1">
                  1
                  Not at all
                </button>

                <button value="2" onClick={(e) => this.recordScore(e)} className="study-button score-2">
                  2
                </button>

                <button value="3" onClick={(e) => this.recordScore(e)} className="study-button score-3">
                  3
                </button>

                <button value="4" onClick={(e) => this.recordScore(e)} className="study-button score-4">
                  4
                </button>

                <button value="5" onClick={(e) => this.recordScore(e)} className="study-button score-5">
                  5
                  Perfectly
                </button>
              </ul>

              <button className="study-button" onClick={this.nextCard()}>
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
