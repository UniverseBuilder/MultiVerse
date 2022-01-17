import React from 'react';

import PropTypes from 'prop-types';

export const RadioGroup = ({ children, model }) => {
  const childElements = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { model });
    }
    return child;
  });
  return <React.Fragment>{childElements}</React.Fragment>;
};

RadioGroup.propTypes = {
  children: PropTypes.node.isRequired,
  model: PropTypes.node.isRequired,
};
