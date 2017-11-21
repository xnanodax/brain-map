import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session';
import NavBar from './navbar';

const mapStateToProps = (state, ownProps) => ({
  // currentUser: state.session.currentUser,
  loggedIn: Boolean(state.session.currentUser)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: (user) => dispatch(logout(user))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps)(NavBar)
);
