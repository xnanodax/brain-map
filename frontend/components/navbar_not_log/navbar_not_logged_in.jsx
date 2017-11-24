import React from 'react';
import { Link } from 'react-router-dom';

class NavBarNotLoggedIn extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }


  handleDemoLogin() {
    return (e) => {
      e.preventDefault();
      const demoUser = {
        username: "password",
        password: "password",
      };
      console.log(this.props);
      console.log(demoUser);
      this.props.login(demoUser)
        .then(() => this.props.history.push('/deck_feed'));
    };
  }


  render() {
    const { formType, action, errors, loggedIn, logout } = this.props;
    return (
      <div className="top-navbar">
        <nav className="navbar-home">
          <div className="nav-logo"><Link to="/">brainMap</Link></div>

          {
            loggedIn ? (
              <div className="navbar-loggedin">
                <button onClick={logout}>Log Out</button>
              </div>
            ) : (
              <ul className="navbar-links">
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/login">Log In</Link></li>
                <li><button onClick={this.handleDemoLogin()}>Demo</button></li>
              </ul>
            )
          }
        </nav>
      </div>
    );
  }
}

export default NavBarNotLoggedIn;
