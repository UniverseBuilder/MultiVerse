import React from 'react';

import PropTypes from 'prop-types';

export const AccordionContent = ({ className, children, isActive }) => {
  if (!isActive) {
    return null;
  }
  return <div className={className}>{children}</div>;
};

AccordionContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isActive: PropTypes.bool,
};

AccordionContent.defaultProps = {
  className: 'accordion-content',
  isActive: false,
};
