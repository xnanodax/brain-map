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
    const { match, clearErrors} = this.props;
    if (match.path !== newProps.match.path) {
      clearErrors();
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
    return (<ul className="errors">
      {this.props.errors.map((error,idx) => <li key={idx}>{ error }</li>)}
    </ul>);
  }

  render() {
    let cardDisplay, sessionHeader, bottomLink, disclousure, usernameInput, passwordInput, emailInput, cardDesc, formButton;
    const { formType, action, loggedIn, logout } = this.props;
    const { displayAns } = this.state;


    if ( formType === "Sign Up") {
      sessionHeader = <h1>{ formType } for free</h1>;
      bottomLink = <li className="text-align-right">Have an account? <Link to="/login" className="green-dark-hover">Log In</Link></li>;
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
      bottomLink = <li className="text-align-right">Need an account? <Link to="/signup" className="green-dark-hover">Sign Up</Link></li>;
    }

    if (displayAns) {
      cardDisplay = (
        <div className="session-card-text flexbox-column flex-center">
          Get smarter,&nbsp;<div className="green-no-hover">faster ...</div>
          <div className="gray small">click me!</div>
        </div>
      );
    } else {
      cardDisplay = (<div className="session-card-text flexbox-column flex-center">
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
      <div className="session-form-container flexbox-row">
        <div className="session-form-right flexbox flex-center">
          <div className="flexbox-column flex-center">
            <div>
              <div
                ref={(el) => {this.card = el;} }
                onClick={(e) => this.play(e)}
                className="card flip" >

                  <div className="all-height flexbox flex-center"
                    ref={(el) => {this.text = el;} } >
                    { cardDisplay }
                </div>
              </div>
            </div>
          { cardDesc }
        </div>
        </div>

        <div className="session-form-left">
          <div className="session-form">
            <form onSubmit={this.handleSubmit()} >
              { sessionHeader }
              { this.renderErrors() }
              <ul className="session-inputs flexbox-column">
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
      </div>

    );
  }
}

export default SessionForm;
