import React from 'react';

class DeckForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  handleSubmit() {
    const { createDeck, history } = this.props;
    return(e) => {
      e.preventDefault();
      createDeck(this.state)
        .then(() => history.push('/deck'));
    };
  }

  handleUpdating(field) {
    return(e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    const { createDeck } = this.props;
    const { title } = this.state;
    return (
      <div className="deck-form-container">
        <h1>Create Deck</h1>
        <form onSubmit={this.handleSubmit()}>
          <label>
            <input
              autoFocus
              type="text"
              placeholder="title"
              onChange={this.handleUpdating('title')}
              value={title}/>

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
