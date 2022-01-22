/* eslint-disable */
import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { useModel } from 'utility/hooks';
import { useForm } from 'utility/redux/slices/forms/formSlice';

export const Accordion = ({
  className,
  children,
  model,
  defaultAccordions,
  controlled,
}) => {
  const accordions = useModel(model);
  const { set } = useForm();

  const handleAccordionClick = e => {
    set({ model, value: [e], overWrite: true });
  };

  useEffect(() => {
    if (defaultAccordions) {
      set({ model, value: defaultAccordions, overWrite: true });
    }
  }, [defaultAccordions]);

  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        controlled,
        accordions,
        handleAccordionClick,
      });
    }
    return child;
  });
  return <div className={className}>{childrenWithProps}</div>;
};

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  controlled: PropTypes.bool,
  model: PropTypes.string,
  defaultAccordions: PropTypes.array,
};

Accordion.defaultProps = {
  className: 'accordion',
  controlled: false,
};
