import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { useModel } from 'utility/hooks';
import { useForm } from 'utility/redux/slices/forms/formSlice';

import { ButtonGroup } from '../../ButtonGroup';

export const RadioGroup = ({
  model,
  groups,
  className,
  type,
  defaultValue,
  onChange,
}) => {
  const value = useModel(model);
  const { set } = useForm();

  const handleChange = e => {
    set({ model, value: e });
    onChange();
  };

  useEffect(() => {
    if (defaultValue) {
      handleChange({ target: { checked: defaultValue } });
    }
  }, [defaultValue]);

  return (
    <div>
      <ButtonGroup
        activeClass={`radio ${className} ${type}`}
        activeGroup={[value]}
        groups={groups}
        inactiveClass={`radio ${className} ${type}-outline`}
        onClick={handleChange}
      />
    </div>
  );
};

RadioGroup.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.bool]),
  groups: PropTypes.arrayOf(PropTypes.string),
  model: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RadioGroup.defaultProps = {
  className: '',
  defaultValue: false,
  groups: [],
  id: 'radio-element',
  onChange: () => {},
  type: 'primary',
  value: '',
};
