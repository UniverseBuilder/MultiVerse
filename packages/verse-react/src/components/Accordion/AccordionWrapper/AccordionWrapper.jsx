import React from 'react';

import PropTypes from 'prop-types';

export const AccordionWrapper = ({
  accordionId,
  accordions,
  controls,
  children,
  handleAccordionClick,
}) => {
  const isActive =
    (controls || []).includes('Expand All') ||
    (accordions || []).includes(accordionId);
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
  controls: PropTypes.array,
  handleAccordionClick: PropTypes.func,
};
