import React from 'react';

import PropTypes from 'prop-types';

export const Wrapper = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Wrapper.defaultProps = {
  className: '',
};
