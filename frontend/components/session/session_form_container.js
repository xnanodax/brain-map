import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signup, login, logout, clearErrors } from '../../actions/session';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  // currentUser: state.session.currentUser,
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session,
  formType: (ownProps.match.path === "/signup") ? "Sign Up" : "Login"
});

const mapDispatchToProps = (dispatch, ownProps) => {
  // const signup = (user) => dispatch(signup(user));
  // const login = (user) => dispatch(login(user));
  const action = (ownProps.match.path === "/signup") ? signup : login;
  return {
    login: (user) => dispatch(login(user)),
    action: (user) => dispatch(action(user)).then(() => this.props.history.push('/deck_feed')),
    logout: (user) => dispatch(logout(user)),
    clearErrors: (errors) => dispatch(clearErrors(errors))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps)(SessionForm)
);
