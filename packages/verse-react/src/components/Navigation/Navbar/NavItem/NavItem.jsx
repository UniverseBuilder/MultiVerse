import React from 'react';

import PropTypes from 'prop-types';

export const NavItem = ({children}) => {
  return <div className="navitem">{children}</div>;
};

NavItem.propTypes = {
  children: PropTypes.node,
};
