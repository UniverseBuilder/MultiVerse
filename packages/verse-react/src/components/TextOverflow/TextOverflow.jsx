import React from 'react';

import PropTypes from 'prop-types';

export const TextOverflow = ({ className, children }) => {
  return <span className={`w-120 textOverflow ${className}`}>{children}</span>;
};

TextOverflow.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

TextOverflow.defaultProps = {
  className: '',
};
