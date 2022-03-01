import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { useModel } from '../../utility/hooks';
import { useForm } from '../../utility/redux/slices/forms/formSlice';
import { AccordionControls } from './AccordionControls';

export const Accordion = ({
  className,
  children,
  model,
  defaultAccordions,
  controlled,
}) => {
  const { accordions, controls } = useModel(model);
  const { set } = useForm();

  const handleAccordionClick = e => {
    set({ model, value: { accordions: [e] }, overWrite: true });
  };

  const handleControls = e => {
    set({ model, value: { controls: [e] }, overWrite: true });
  };

  useEffect(() => {
    if (defaultAccordions) {
      set({ model, value: defaultAccordions, overWrite: true });
    }
  }, [defaultAccordions]);

  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        accordions,
        controls,
        handleAccordionClick,
      });
    }
    return child;
  });
  return (
    <div className={className}>
      <If condition={controlled}>
        <AccordionControls
          controls={controls}
          handleControls={handleControls}
        />
      </If>
      {childrenWithProps}
    </div>
  );
};

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  controlled: PropTypes.bool,
  defaultAccordions: PropTypes.array,
  model: PropTypes.string,
};

Accordion.defaultProps = {
  className: 'accordion',
  controlled: false,
};
