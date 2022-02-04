import React from 'react';

import PropTypes from 'prop-types';

import { Icon } from '../../Icon';

export const AccordionHeader = ({
  children,
  className,
  accordionId,
  handleAccordionClick,
  isActive,
}) => {
  return (
    <header
      className={className}
      onClick={() => handleAccordionClick(accordionId)}
    >
      <h3 className="header">{children}</h3>
      <div className="icon">
        <Icon
          className=" primary-icon flex-100"
          name={isActive ? 'minus' : 'plus'}
        />
      </div>
    </header>
  );
};

AccordionHeader.propTypes = {
  children: PropTypes.node.isRequired,
  accordionId: PropTypes.string,
  className: PropTypes.string,
  handleAccordionClick: PropTypes.func,
  isActive: PropTypes.bool,
};

AccordionHeader.defaultProps = {
  className: 'accordion-header',
  isActive: false,
};
