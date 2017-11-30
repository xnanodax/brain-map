import React from 'react';
import { Link } from 'react-router-dom';
import CircularProgressbar from 'react-circular-progressbar';

class Sidebar extends React.Component {

  render() {
    const { deck, numCards, currIndex} = this.props;
    return (
      (deck ? (
        <div className="study-sidebar-container">
          <Link to={`/deck`}>
            <button className="study-button">
              <i className="fa fa-chevron-left" aria-hidden="true"></i>&nbsp;&nbsp;Done
            </button>
          </Link>

          <div className="progress">
            <div style={{ position: 'relative', width: '40%', height: '40%', padding: '0%' }}>
              <CircularProgressbar className="CircularProgressbar-inverted"
                backgroundPadding={0}
                strokeWidth={6}
                initialAnimation
                percentage={deck.mastery_score} />
            </div>

            <div>
              { currIndex } out of {numCards.length} cards done
            </div>
          </div>
        </div>
      ) : (
        "loading"
      ) )


    );
  }
}

export default Sidebar;
