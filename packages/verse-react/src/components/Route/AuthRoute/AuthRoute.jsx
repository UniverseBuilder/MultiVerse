import React from 'react';

import PropTypes from 'prop-types';
import { Navigate, Route } from 'react-router-dom';

export const AuthRoute = ({ auth, fallback, ...props }) => {
  const routeProps = { ...props };
  if (!auth) {
    props.element = <Navigate replace to={fallback} />;
  }
  return <Route {...routeProps} />;
};

AuthRoute.propTypes = {
  auth: PropTypes.bool,
  fallback: PropTypes.string,
};

AuthRoute.defaultProps = {
  auth: false,
  fallback: '/',
};
