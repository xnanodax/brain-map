import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: 0,
      remainingCards: props.cards,
    };
  }



  componentDidMount() {
    const { deckId, fetchDeck, cards, fetchCards } = this.props;
    fetchDeck(deckId);
    fetchCards(deckId);
    this.setState({
      currentCard: cards.shift(),
      remainingCards: cards
    });
  }

  componentWillReceiveProps(newProps) {
    console.log("newProps", newProps);
    const { deckId, fetchDeck, cards, fetchCards, fetchCard } = newProps;

    // this.setState({
    //   currentCard: newProps.cards.shift(),
    //   remainingCards: newProps.cards
    // });
    // if (this.state.remainingCards.length !== newProps.cards.length ) {
    //   fetchCard(deckId, this.state.currentCard.id);
    // }

  }

  nextCard() {
    return(e) => {
      this.setState({
        currentCard: this.state.remainingCards.shift(),
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
            {this.state.currentCard.keyword}
            {this.state.currentCard.body}
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
