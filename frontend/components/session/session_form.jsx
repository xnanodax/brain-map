import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      displayAns: true
    };
    this.rotateCardOutline = this.rotateCardOutline.bind(this);
    this.revealAns = this.revealAns.bind(this);
    this.play = this.play.bind(this);

  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentDidMount() {
    this.props.clearErrors();
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
        // .then(() => this.props.history.push('/deck'));
    };
  }



  rotateCardOutline(e) {
    if (this.card.classList.contains('rotate')) {
      return this.card.classList.remove('rotate');
    } else {
      return this.card.classList.add('rotate');
    }
  }

  rotateText(e){
    if (this.text.classList.contains('transform-text')) {
      return this.text.classList.remove('transform-text');
    } else {
      return this.text.classList.add('transform-text');
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



  render() {
    const { formType, action, errors, loggedIn, logout } = this.props;
    const { displayAns } = this.state;
    return (
      <ul className="session-form-container">
        <div className="intro-ad">

          <div className="inner-card-container">
            <div className='position-intro-card'>
              <div ref={(el) => {this.card = el;} }
                onClick={(e) => this.play(e)}
                className="intro-card flip">

                <div className="intro-card-text"
                  ref={(el) => {this.text = el;} } >
                  { displayAns === true ?
                    <div>
                      <div className="intro-ad-small-text">
                        Get smarter, faster...
                      </div>
                      <div className="gray">click me!</div>
                    </div>
                    : "...by studying with brainMap's index cards" }</div>
                </div>
              </div>
              <div className="caption gray">Learn new concepts, review old things, track your progress with our online flashcards.</div>
            </div>
          </div>



        <div className="session-form-outer">
          <div className="session-form">
          { formType === "Sign Up" ? <h1>{ formType } for free</h1> : <h1>{ formType }</h1> }
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
        </div>
      </ul>

    );
  }
}

export default SessionForm;

// <h1>Get smarter, faster.</h1>
// <div className="intro-ad-small-text">
//   Learn new concepts, review old things, track your progress with our online flashcards.
// </div>
