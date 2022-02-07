import React from 'react';

import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';

export const AuthRoute = ({ auth, fallback }) => {
  return (
    <Choose>
      <When condition={auth}>
        <Outlet />
      </When>
      <Otherwise>
        <Navigate replace to={fallback} />
      </Otherwise>
    </Choose>
  );
};

AuthRoute.propTypes = {
  auth: PropTypes.bool,
  fallback: PropTypes.string,
};

AuthRoute.defaultProps = {
  auth: false,
  fallback: '/',
};
