import React from 'react';
import SearchIndex from './search_index';
// import onClickOutside from 'react-onclickoutside';

class brainMapSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      title: "",
      firstTime: true,
    };
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
      <div>
        <input onChange={this.handleUpdatingDecks('title')}
          placeholder={"search by deck name"}
          value={this.state.title} />

          <SearchIndex firstTime={this.state.firstTime}
            searchItems={Object.values(this.props.searchResults)}
            searchVal={this.state.title}
            clearState={this.clearState}/>
      </div>
    );
  }
}

export default brainMapSearch;
