import React from 'react';

import PropTypes from 'prop-types';

export const NavItemRight = ({ children }) => {
  return <div className="navitem-right">{children}</div>;
};

NavItemRight.propTypes = {
  children: PropTypes.node,
};
