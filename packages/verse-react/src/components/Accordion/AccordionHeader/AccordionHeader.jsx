import React from 'react';

import PropTypes from 'prop-types';

import IconMinus from '../../Icon/IconMinus';
import IconPlus from '../../Icon/IconPlus';

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
        <Choose>
          <When condition={isActive}>
            <IconMinus className=" primary-icon flex-100" />
          </When>
          <Otherwise>
            <IconPlus className=" primary-icon flex-100" />
          </Otherwise>
        </Choose>
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
