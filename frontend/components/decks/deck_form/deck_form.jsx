import React from 'react';

class DeckForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const { createDeck, history } = this.props;
      e.preventDefault();

      if (this.state.title === "") {
        return createDeck(this.state);
      } else {
        return createDeck(this.state);
      }
  }


  componentWillReceiveProps(newProps) {
    const { deck, errors } = newProps;
    if (errors.length > 0) return undefined;
    this.props.history.push(`/deck/${deck.id}`);
  }

  handleUpdating(field) {
    return(e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    const { createDeck, errors } = this.props;
    const { title } = this.state;



    return (
      <div className="deck-form-container">

        <div className="form-header">
          <h1>Create Deck
          </h1>
          <i className="fa fa-times fa-2x"
            aria-hidden="true"
            onClick={() => history.go(-1)}></i>
        </div>
          <ul className="session-errors">
            {errors.map((error,idx) => <li key={idx}>{ error }</li>)}
          </ul>


        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            <input autoFocus
              type="text"
              placeholder="title"
              onChange={this.handleUpdating('title')}
              value={title} />

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
