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
      <ul className="errors">
        {this.props.errors.map((error,idx) => <li key={idx}>{ error }</li>)}
      </ul>
    );
  }

  render() {
    const { createDeck, errors } = this.props;
    const { title } = this.state;



    return (
      <div className="deck-form-container">

        <div className="flexbox-row form-header">
          <h1>Create Deck</h1>
        </div>
        { this.renderErrors() }



        <form className = "flexbox-column form-spacing" onSubmit={(e) => this.handleSubmit(e)}>
          <input
            autoFocus
            className="search-input"
            type="text"
            placeholder="title"
            onChange={this.handleUpdating('title')}
            value={title} />
          <button>Create New</button>
        </form>


      </div>
    );

  }

}
//
// <i className="fa fa-times fa-2x"
//   aria-hidden="true"
//   onClick={() => history.go(-1)}></i>

export default DeckForm;
