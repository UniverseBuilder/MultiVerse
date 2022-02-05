import React from 'react';

import PropTypes from 'prop-types';

export const Form = ({ children, className }) => {
  return <form className={className}>{children}</form>;
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Form.defaultProps = {
  className: 'form',
};
