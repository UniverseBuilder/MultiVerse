import React from 'react';

import PropTypes from 'prop-types';

export const Navbar = ({ className, children }) => {
  return (
    <nav className={className}>
      <div className="navbar-inner">
        <div className="navbar-items">{children}</div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Navbar.defaultProps = {
  children: null,
  className: 'navbar fixed-top',
};
