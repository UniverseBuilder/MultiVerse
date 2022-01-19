import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { valueChange } from 'utility/redux/slices/forms/formSlice';

export const Radio = ({
  id,
  model,
  className,
  placeholder,
  onChange,
  defaultValue,
  value,
  disabled,
  readonly,
}) => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(valueChange({ model, value: e.target.value }));
    onChange();
  };

  useEffect(() => {
    handleChange({ target: { checked: defaultValue } });
  }, [defaultValue]);

  return (
    <input
      id={id}
      aria-describedby="radio"
      onChange={handleChange}
      type="radio"
      name={model}
      className={className}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      readOnly={readonly}
    />
  );
};

Radio.propTypes = {
  model: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOfType([PropTypes.bool]),
};

Radio.defaultProps = {
  id: 'radio-element',
  onChange: () => {},
  value: '',
  defaultValue: false,
  className: 'form-radio secondary-form',
};
