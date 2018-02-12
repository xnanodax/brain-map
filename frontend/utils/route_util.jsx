import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ModalContainer from '../components/modal/modal_container';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser)
});

const Auth = ({loggedIn, path, component: Component}) => (
  <Route
    path={path}
    render={(props) =>
      loggedIn ? <Redirect to="/deck" />: <Component {...props}/>
    }
  />
);

const Protected = ({loggedIn, path, component: Component}) => (
  <Route
    path={path}
    render={(props) =>
      loggedIn ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const Modal = ({ path, component: Component}) =>(
  <Route 
    path={path}
    render={(props) => <ModalContainer component={Component} /> } />
)

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
export const ModalRoute = withRouter(connect(mapStateToProps, null)(Modal));