import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  handleTyping(field) {
    return (e) => (
      this.setState({[field]: e.target.value})
    );
  }

  handleSubmit() {
    return (e) => {
      e.preventDefault();
      this.props.action(this.state);
    };
  }


  render() {
    const { formType, action, errors, loggedIn } = this.props;
    return (
      <div className="session-form">
        <h1>{ formType }</h1>
        <form onSubmit={this.handleSubmit()}>

          <ul className="session-errors">
            {
              errors.map((error,idx) => <li key={idx}>{ error }</li>)
            }
          </ul>

          <label>Username:
            <input
              type="text"
              onChange= {this.handleTyping('username')}
              value={this.state.username}
              />
          </label>

          { formType === "Sign Up" ? (
            <label>Email:
              <input
                type="text"
                onChange= {this.handleTyping('email')}
                value={this.state.email}
                />
            </label>
          ) : ( "" ) }

          <label>Password:
            <input
              type="text"
              onChange= {this.handleTyping('password')}
              value={this.state.password}
              />
          </label>

          <input
            type="submit"
            value={ formType }/>

        </form>
      </div>


    );
  }
}

export default SessionForm;
