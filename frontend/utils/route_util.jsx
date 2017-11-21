import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser)
});

const Auth = ({loggedIn, path, component: Component}) => (
  <Route
    path={path}
    render={(props) =>
      loggedIn ? <Redirect to="/" />: <Component {...props}/>
    }
  />
);

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

const Protected = ({loggedIn, path, component: Component}) => (
  <Route
    path={path}
    render={(props) =>
      loggedIn ? <Component {...props} /> : <Redirect to="/signup" />
    }
  />
);

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
