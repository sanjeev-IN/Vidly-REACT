import React from 'react';
import { Route } from 'react-router';
import auth from '../../services/authService';
import { Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, render, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!auth.getCurrentUser()) return <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />;
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;