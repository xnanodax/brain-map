import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {

  render() {
    const { deckId } = this.props;
    return (
      <div className="study-sidebar-container">
        <Link to={`/deck/view/${deckId}`}>
          <button className="study-button">
            <i className="fa fa-chevron-left" aria-hidden="true"></i>&nbsp;&nbsp;Done
          </button>
        </Link>
        <div className="mastery">
          <div className="mastery-num">
            <div className="mastery-big">50</div>
            <div className="mastery-small">&nbsp;%</div>
          </div>

          <div className="mastery-small">Mastery</div>
        </div>

        __ out of __ cards done

      </div>

    );
  }
}

export default Sidebar;
