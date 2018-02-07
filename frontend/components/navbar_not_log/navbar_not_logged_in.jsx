import React from 'react';
import { Link } from 'react-router-dom';

class NavBarNotLoggedIn extends React.Component {
  constructor(props) {
    super(props);
  }


  handleDemoLogin() {
    return (e) => {
      const { login, history } = this.props;
      const demoUser = {
        username: "demodemo",
        password: "demodemo",
      };
      e.preventDefault();
      login(demoUser);
    };
  }


  render() {
    const { formType, action, errors, loggedIn, logout } = this.props;
    return (
      <div className="top-navbar all-height">
        <nav className="navbar-home all-height flexbox-row">
          <div className="nav-logo">
            <Link to="/"><i class="far fa-lightbulb"></i> brainMap</Link>
          </div>

          {
            loggedIn ? (
              <div>
                <button onClick={logout}>Log Out</button>
              </div>
            ) : (
              <ul className="navbar-links flexbox-row flex-center">
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
