import React from 'react';
import SearchIndex from './search_index';
// import onClickOutside from 'react-onclickoutside';
import NavBarContainer from '../navbar_log/navbar_logged_in_container';
import DeckIndexContainer from '../decks/deck_index_container';

class brainMapSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      title: "",
      firstTime: true,
    };
  }

  componentDidUnmount() {
    console.log("search component unmounted")
  }

  handleUpdatingTags(field) {
    return(e) => {
      this.setState({[field]: e.target.value}, () => {
        this.props.searchTags(this.state[field]);
      });
    };
  }

  handleUpdatingDecks(field) {
    return(e) => {
      this.setState({[field]: e.target.value}, () => {
        this.props.searchDecks(this.state[field]);
      });
    };
  }

  render() {
    return (
      <div className ="">
        <NavBarContainer className="navbar"/>
        <DeckIndexContainer />

        <div className="search-container">
          <h1>Search</h1>
          <input
            autoFocus
            className="search-input"
            onChange={this.handleUpdatingDecks('title')}
            placeholder={"search by deck name"}
            value={this.state.title}>

          </input>

            <SearchIndex firstTime={this.state.firstTime}
              searchItems={Object.values(this.props.searchResults)}
              searchVal={this.state.title}
              clearState={this.clearState}/>
        </div>
      </div>
    );
  }
}

export default brainMapSearch;
