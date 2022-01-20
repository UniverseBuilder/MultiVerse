import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { useForm } from 'utility/hooks';
import { valueChange } from 'utility/redux/slices/forms/formSlice';

export const Input = ({
  id,
  model,
  type,
  className,
  placeholder,
  onChange,
  defaultValue,
  disabled,
  readonly,
  onFocus,
  onBlur,
  onMouseDown,
  autoComplete,
}) => {
  const value = useForm(model);
  const dispatch = useDispatch();

  const handleChange = e => {
    if (type === 'number') {
      dispatch(valueChange({ model, value: Number(e.target.value) }));
    } else {
      dispatch(valueChange({ model, value: e.target.value }));
    }
    onChange();
  };

  useEffect(() => {
    if (defaultValue && value !== defaultValue) {
      handleChange({ target: { value: defaultValue } });
    }
  }, [defaultValue]);

  return (
    <input
      id={id}
      aria-describedby="input"
      onChange={handleChange}
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      readOnly={readonly}
      onFocus={onFocus}
      onBlur={onBlur}
      onMouseDown={onMouseDown}
      autoComplete={autoComplete}
    />
  );
};

Input.propTypes = {
  model: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onMouseDown: PropTypes.func,
  autoComplete: PropTypes.string,
};

Input.defaultProps = {
  id: 'input-element',
  onChange: () => null,
  onMouseDown: () => null,
  onBlur: () => null,
  value: '',
  defaultValue: '',
  className: 'form-input secondary-form',
};
