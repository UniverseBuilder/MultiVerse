import React from 'react';

import PropTypes from 'prop-types';

export const Label = ({ children, style }) => {
  return (
    <labels htmlFor="form_label" className="formLabel" style={style}>
      {children}
    </labels>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  style: PropTypes.shape({}),
};

Label.defaultProps = {
  children: '',
  style: {},
};
