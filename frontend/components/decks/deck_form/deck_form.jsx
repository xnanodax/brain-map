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
    const { createDeck, history, deck } = this.props;
    e.preventDefault();
    createDeck(this.state).then((action) => this.props.history.push(`/deck/view/${Object.keys(action.deck)[0]}`));

  }

  componentDidMount() {
    this.props.clearDeckErrors();
  }

  componentWillUnmount() {
    this.props.clearDeckErrors();
  }

  handleUpdating(field) {
    return(e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  renderErrors() {
    return (
      <ul className="session-errors">
        {this.props.errors.map((error,idx) => <li key={idx}>{ error }</li>)}
      </ul>
    );
  }

  render() {
    const { createDeck, errors } = this.props;
    const { title } = this.state;



    return (
      <div className="deck-form-container">

        <div className="form-header">
          <h1>Create Deck</h1>
          <i className="fa fa-times fa-2x"
            aria-hidden="true"
            onClick={() => history.go(-1)}></i>
        </div>
        { this.renderErrors() }



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
