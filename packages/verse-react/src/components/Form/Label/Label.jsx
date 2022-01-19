import React from 'react';

import PropTypes from 'prop-types';

export const Label = ({ children, className }) => {
  return (
    <label htmlFor={"form_label"} className={className}>
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

Label.defaultProps = {
  children: '',
  className: 'form-label m-r-8',
  style: {},
};
