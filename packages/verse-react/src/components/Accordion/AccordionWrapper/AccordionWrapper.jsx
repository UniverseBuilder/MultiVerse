import React from 'react';

import PropTypes from 'prop-types';

export const AccordionWrapper = ({
  accordionId,
  accordions,
  children,
  handleAccordionClick,
}) => {
  const isActive = (accordions || []).includes(accordionId);
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        accordionId,
        handleAccordionClick,
        isActive,
      });
    }
    return child;
  });
  return (
    <div
      className={
        isActive ? 'accordion-wrapper accordion-active' : 'accordion-wrapper'
      }
    >
      {childrenWithProps}
    </div>
  );
};

AccordionWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  accordionId: PropTypes.string,
  accordions: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  handleAccordionClick: PropTypes.func,
};
