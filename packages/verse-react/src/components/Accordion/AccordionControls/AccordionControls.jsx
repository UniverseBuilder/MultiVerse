import React from 'react';

import PropTypes from 'prop-types';

import { ButtonGroup } from '../../ButtonGroup';

export const AccordionControls = ({ controls, handleControls }) => {
  return (
    <div className="accordion-controls">
      <ButtonGroup
        activeClass={`radio secondary`}
        activeGroup={controls}
        groups={['Expand All']}
        inactiveClass={`radio secondary-outline`}
        onClick={handleControls}
      />
    </div>
  );
};

AccordionControls.propTypes = {
  handleControls: PropTypes.func.isRequired,
  controls: PropTypes.array,
};

AccordionControls.defaultProps = {
  controls: [],
};
