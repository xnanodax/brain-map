import React from 'react';
import { Link } from 'react-router-dom';
import CircularProgressbar from 'react-circular-progressbar';
import { BarLoader } from 'react-spinners';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    const { deck, numCards, currIndex } = this.props;

    const studyButton = (
      <Link to={`/deck`}>
        <button className="study-button">
          <i className="fa fa-chevron-left" aria-hidden="true"></i>
          &nbsp;&nbsp;Done
        </button>
      </Link>
    );

    const currCard = (
      <div>
        {currIndex} / {numCards.length} cards
      </div>
    );


    return (
        <div className="study-sidebar-container">
          <div className="progress">
            {studyButton}

            { deck ? (
              <div class="progress">
                <div><h1 className="sidebar-title">{deck.title}</h1></div>
                <div style={{ position: 'relative', width: '80%', height: '80%', padding: '5%' }}>
                  <CircularProgressbar className="CircularProgressbar-inverted"
                    backgroundPadding={0}
                    strokeWidth={6}
                    initialAnimation
                    percentage={deck.mastery_score} />
                </div>
                {currCard}


              </div>
            ) : (
              <div className='loading'>
                <BarLoader
                  color={'#2dbe60'}
                  loading={this.state.loading}
                />
              </div>
            ) }

          </div>
        </div>

      );
    }
}

export default Sidebar;
