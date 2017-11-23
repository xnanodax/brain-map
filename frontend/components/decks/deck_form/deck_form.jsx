import React from 'react';

class DeckForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  handleSubmit() {
    return(e) => {
      e.preventDefault();
      this.props.createDeck(this.state).then(() => this.props.history.push('/deck_feed'));
    };
  }

  handleUpdating(field) {
    return(e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    const { createDeck } = this.props;
    return (
      <div className="deck-form-container">

        <form onSubmit={this.handleSubmit()}>
          <label>
            <input
              type="text"
              placeholder="title"
              onChange={this.handleUpdating('title')}
              value={this.state.title}/>

            <button>
              Create New
            </button>

          </label>
        </form>

      </div>
    );

  }

}

export default DeckForm;
