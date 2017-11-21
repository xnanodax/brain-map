import React from 'react';
import { Route, Redirect } from 'react-router-dom';
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

export const AuthRoute = connect(mapStateToProps, null)(Auth);
