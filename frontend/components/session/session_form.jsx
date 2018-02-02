import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.blankState = {
      username: "",
      email: "",
      password: "",
      displayAns: true
    };
    this.state = this.blankState;
    this.rotateCardOutline = this.rotateCardOutline.bind(this);
    this.revealAns = this.revealAns.bind(this);
    this.play = this.play.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.path !== newProps.match.path) {
      this.props.clearErrors();
      this.setState(this.blankState);
    }
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

  rotateCardOutline(e) {
    const classList = this.card.classList;
    if (classList.contains('rotate')) {
      return classList.remove('rotate');
    } else {
      return classList.add('rotate');
    }
  }

  rotateText(e){
    const text = this.text.classList;
    if (text.contains('transform-text')) {
      return text.remove('transform-text');
    } else {
      return text.add('transform-text');
    }
  }

  revealAns(e) {
    return this.setState({
      displayAns: !this.state.displayAns
    });
  }

  play(e) {
    this.revealAns(e);
    this.rotateCardOutline(e);
    this.rotateText(e);
  }

  renderErrors() {
    return (<ul className="session-errors">
      {this.props.errors.map((error,idx) => <li key={idx}>{ error }</li>)}
    </ul>);
  }

  render() {
    let cardDisplay, sessionHeader, bottomLink, disclousure, usernameInput, passwordInput, emailInput, cardDesc, formButton;
    const { formType, action, loggedIn, logout } = this.props;
    const { displayAns } = this.state;


    if ( formType === "Sign Up") {
      sessionHeader = <h1>{ formType } for free</h1>;
      bottomLink = <li>Have an account? <Link to="/login" className="green-session">Log In</Link></li>;
      disclousure = (<li>
                        <div className="disclosure">
                          By clicking Sign up, I agree to the Terms of Service and Privacy Policy.
                        </div>
                      </li>
                    );
      emailInput = (
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
      );
    } else {
      sessionHeader = <h1>{ formType }</h1>;
      bottomLink = <li>Need an account? <Link to="/signup" className="green-session">Sign Up</Link></li>;
    }

    if (displayAns) {
      cardDisplay = (
        <div className="intro-ad-small-text">
          Get smarter,&nbsp;<div className="green-no-hover">faster ...</div>
          <div className="gray small">click me!</div>
        </div>
      );
    } else {
      cardDisplay = (<div className="intro-ad-small-text">
        ...by studying with <div className="green-no-hover">brainMap's</div> index cards</div>);
    }

    usernameInput = (
      <li>
        <label>
          <input
            type="text"
            autoFocus
            onChange= {this.handleTyping('username')}
            value={this.state.username.trim()}
            placeholder="Username"
            />
        </label>
      </li>
      );

    passwordInput = (
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
    );

    cardDesc = (
      <div className="caption gray">
        Learn new concepts, review old things, track your progress with our online flashcards.
      </div>
    );

    formButton = (
      <li>
        <button>
          { formType }
        </button>
      </li>
    );

    return (
      <ul className="session-form-container">
        <div className="intro-ad">
          <div className="inner-card-container">
            <div>
              <div
                ref={(el) => {this.card = el;} }
                onClick={(e) => this.play(e)}
                className="intro-card flip" >

                  <div className="intro-card-text"
                    ref={(el) => {this.text = el;} } >
                    { cardDisplay }
                </div>
              </div>
            </div>
          { cardDesc }
        </div>
        </div>

        <div className="session-form-outer">
          <div className="session-form">
            <form onSubmit={this.handleSubmit()} >
              { sessionHeader }
              { this.renderErrors() }
              <ul className="session-form-login-box">
                { usernameInput }
                { emailInput }
                { passwordInput }
                { disclousure }
                { formButton }
                { bottomLink }
              </ul>
            </form>
          </div>
        </div>
      </ul>

    );
  }
}

export default SessionForm;
