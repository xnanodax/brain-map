import React from 'react';
import { Link } from 'react-router-dom';
import { BarLoader } from 'react-spinners';

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

  render() {
    const { deck } = this.props;
    return (
      <div className="deck-show">
        { deck ? (
          <div className="card-list">
            <h1>{deck.title}</h1>
            <ul className ="deck-show-attributes">
              <li>Mastery: {deck.mastery_percentage}%</li>
              <li>Cards: __</li>
              <ul>
                Card List:
              </ul>
            </ul>
          </div>

          ) : (
            <div className='loading'>
              <BarLoader
                color={'#7ED321'}
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
