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
        .then(() => history.push('/deck'),
          (errors) => console.log(errors));
        // .then(() => history.push('/deck'),
        //       err => console.log(err));
    };
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

        <h1>Create Deck
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
