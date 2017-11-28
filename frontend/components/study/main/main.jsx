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
    const { deckId, fetchDeck, cards, fetchCards } = this.props;
    fetchDeck(deckId);
    fetchCards(deckId);
    this.setState({
      currentCard: cards.shift(),
      display: this.state.currentCard.keyword,
      remainingCards: cards
    });
  }

  componentWillReceiveProps(newProps) {
    console.log("newProps", newProps);
    const { deckId, fetchDeck, cards, fetchCards, fetchCard } = newProps;
    // fetchDeck(deckId);
    // fetchCards(deckId);
    // this.setState({
    //   currentCard: newProps.cards.shift(),
    //   remainingCards: newProps.cards
    // });

    // this.setState({
    //   display: this.state.currentCard.keyword
    // });
    if (this.state.remainingCards.length === newProps.cards.length ) {
      this.setState({
        display: newProps.cards.keyword
      });
    }

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
      this.setState({
        currentCard: this.state.remainingCards.shift(),
        display: this.state.currentCard.keyword,
        remainingCards: this.state.remainingCards
      });
    };
  }


  // this.state.allIds.length === 0
  // <MainDone />
  render() {
    console.log("state", this.state);
    const { cards } = this.props;
    return (
      <div className="study-main-container">
        {this.state.currentCard ? (
          <div>
            {this.state.display}
            <button onClick={this.flipCard()}>
              flip!
            </button>

            <button onClick={this.nextCard()}>
              proceed!
            </button>
          </div>
        ) : ("you finished!") }
      </div>

    );
  }
}

export default Main;
