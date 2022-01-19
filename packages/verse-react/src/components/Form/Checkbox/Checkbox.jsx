import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { useForm } from 'utility/hooks';
import { valueChange } from 'utility/redux/slices/forms/formSlice';

import { ButtonGroup } from '../../ButtonGroup';

export const Checkbox = ({
  model,
  groups,
  className,
  type,
  defaultValue,
  onChange,
}) => {
  const value = useForm(model);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(valueChange({ model, value: [e], overWrite: true }));
    onChange();
  };

  useEffect(() => {
    if (defaultValue) {
      handleChange({ target: { value: defaultValue } });
    }
  }, [defaultValue]);

  return (
    <ButtonGroup
      groups={groups}
      onClick={handleChange}
      activeGroup={value}
      activeClass={`radio ${className} ${type}`}
      inactiveClass={`radio ${className} ${type}-outline`}
    />
  );
};

Checkbox.propTypes = {
  model: PropTypes.string,
  groups: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOfType([PropTypes.bool]),
};

Checkbox.defaultProps = {
  id: 'radio-element',
  groups: [],
  onChange: () => {},
  value: '',
  defaultValue: false,
  className: '',
  type: 'primary',
};
