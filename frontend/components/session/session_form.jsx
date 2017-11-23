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
        .then(() => this.props.history.push('/deck_feed'));
    };
  }

  handleDemoLogin() {
    return (e) => {
      e.preventDefault();
      const demoUser = {
        username: "password",
        password: "password",
      };
      this.props.login(demoUser)
        .then(() => this.props.history.push('/deck_feed'));
    };
  }


  render() {
    const { formType, action, errors, loggedIn, logout } = this.props;
    return (

      <div className="full-width">
        <div className="control-nav-bar-width">
          <nav className="navbar-home">
          <div className="nav-logo"><Link to="/">brainMap</Link></div>

            {
              loggedIn ? (
                <div className="navbar-loggedin">
                  <button onClick={logout}>Log Out</button>
                </div>
              ) : (
                <ul className="navbar-loggedout">
                  <li><Link to="/signup">Sign Up</Link></li>
                  <li><Link to="/login">Log In</Link></li>
                  <li><button onClick={this.handleDemoLogin()}>Demo</button></li>
                </ul>
              )
            }
        </nav>
        </div>

        <ul className="session-form-container">
          <div className="intro-ad">
            <h1>Get smarter, faster.</h1>
            <div className="intro-ad-small-text">
              Learn new concepts, review old things, track your progress with our online flashcards.
            </div>
          </div>

          <div className="session-form">
            { formType === "Sign Up" ? <h1>{formType} for free</h1> : <h1>{ formType }</h1> }
            <form onSubmit={this.handleSubmit()} >

              <ul className="session-errors">
                {errors.map((error,idx) => <li key={idx}>{ error }</li>)}
              </ul>

                <ul className="session-form-login-box">

                  <li>
                    <label>
                      <input
                        type="text"
                        onChange= {this.handleTyping('username')}
                        value={this.state.username.trim()}
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
                          value={this.state.email.trim()}
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
                        value={this.state.password.trim()}
                        placeholder="Password"
                        />
                    </label>
                  </li>

                  { formType === "Sign Up" ? (
                    <li>
                      <div className="disclosure">
                        By clicking Sign up, I agree to the Terms of Service and Privacy Policy.
                      </div>
                    </li>

                  ) : ( "" )
                  }

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
                      Need an account? <Link to="/signup">Sign Up</Link>
                    </li>
                  ) }
                </ul>

            </form>
          </div>
        </ul>
      </div>

    );
  }
}

export default SessionForm;
