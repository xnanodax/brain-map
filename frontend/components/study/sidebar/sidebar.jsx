import React from 'react';
import { Link } from 'react-router-dom';

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
          <div className="mastery">
            <div className="mastery-num">
              <div className="mastery-big">{deck.mastery_score}</div>
              <div className="mastery-small">&nbsp;%</div>
            </div>

            <div className="mastery-small">Mastery</div>
          </div>

          { currIndex } out of {numCards.length} cards done

        </div>
      ) : (
        "loading"
      ) )


    );
  }
}

export default Sidebar;
