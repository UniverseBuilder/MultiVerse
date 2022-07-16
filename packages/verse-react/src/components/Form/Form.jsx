import React from 'react';

import PropTypes from 'prop-types';

export const Form = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Form.defaultProps = {
  className: 'form',
};
