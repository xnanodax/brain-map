import React from 'react';
import { Link } from 'react-router-dom';

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
      this.props.action(this.state)
        .then(() => this.props.history.push('/home'));
    };
  }


  render() {
    const { formType, action, errors, loggedIn } = this.props;
    return (
      <div className="session-form-container">
        { formType === "Sign Up" ? <h1>{formType} for free</h1> : <h1>{ formType }</h1> }
        <form onSubmit={this.handleSubmit()}>

            <ul className="session-errors">
              {
                errors.map((error,idx) => <li key={idx}>{ error }</li>)
              }
            </ul>

            <ul className="session-form">

            <li>
              <label>
              <input
                type="text"
                onChange= {this.handleTyping('username')}
                value={this.state.username}
                placeholder="Username"
                />
              </label>
            </li>

            { formType === "Sign Up" ? (
              <li>
                <label>
                <input
                  type="text"
                  onChange= {this.handleTyping('email')}
                  value={this.state.email}
                  placeholder="Email"
                  />
                </label>
              </li>
            ) : ( "" ) }

            <li>
              <label>
              <input
                type="password"
                onChange= {this.handleTyping('password')}
                value={this.state.password}
                placeholder="Password"
                />
              </label>
            </li>

            <li>
              <button>
                { formType }
              </button>

            </li>

            { formType === "Sign Up" ? (
              <li>
                Have an account? <Link to="/login">Log In</Link>
              </li>
            ) : (
              <li>
                Haven't signed up? <Link to="/signup">Sign Up</Link>
              </li>
            ) }

          </ul>
        </form>
      </div>


    );
  }
}

export default SessionForm;
