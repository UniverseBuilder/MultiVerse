import React from 'react';

import PropTypes from 'prop-types';

export const Form = ({ children }) => {
  return <div className="form">{children}</div>;
};

Form.propTypes = {
  children: PropTypes.node,
};

Form.defaultProps = {
  children: '',
};
