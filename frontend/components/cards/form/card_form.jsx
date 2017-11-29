import React from 'react';

class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      body: ""
    };
  }



  handleSubmit() {
    const { deckId, createCard } = this.props;
    return(e) => {
      e.preventDefault();
      createCard(deckId, this.state)
        .then(() => this.props.history.push(`/deck/view/${deckId}`));
    };
  }

  handleUpdating(field) {
    return(e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    const { createCard, errors, history } = this.props;
    return (
      <div className="deck-form-container">


      <div className="form-header">
        <h1>Create Card</h1>
        <i className="fa fa-times fa-2x" aria-hidden="true" onClick={() => history.go(-1)}></i>
      </div>

        <ul className="session-errors">
          {errors.map((error,idx) => <li key={idx}>{ error }</li>)}
        </ul>


        <form onSubmit={this.handleSubmit()}>
          <label>
            <input
              autoFocus
              type="text"
              placeholder="question"
              onChange={this.handleUpdating('keyword')}
              value={this.state.keyword}/>

              <input
                type="text"
                placeholder="answer"
                onChange={this.handleUpdating('body')}
                value={this.state.body}/>

            <button>
              Create New
            </button>

          </label>
        </form>

      </div>
    );

  }

}

export default CardForm;