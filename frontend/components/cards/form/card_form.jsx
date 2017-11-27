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

        <h1>Create Card
          <i class="fa fa-times" aria-hidden="true" onClick={() => history.go(-1)}></i>
        </h1>

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
