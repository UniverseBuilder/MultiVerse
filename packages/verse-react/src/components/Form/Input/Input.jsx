import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { useModel } from '../../../utility/hooks';
import { useForm } from '../../../utility/redux/slices/forms/formSlice';


export const Input = ({
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
  const value = useModel(model);
  const { set } = useForm();
  const handleChange = e => {
    if (type === 'number') {
      set({ model, value: Number(e.target.value) });
    } else {
      set({ model, value: e.target.value });
    }
    onChange(e);
  };

  useEffect(() => {
    if (defaultValue && value !== defaultValue) {
      handleChange({ target: { value: defaultValue } });
    }
  }, [defaultValue]);

  return (
    <input
      aria-describedby="input"
      autoComplete={autoComplete}
      className={className}
      disabled={disabled}
      id={model}
      onBlur={onBlur}
      onChange={handleChange}
      onFocus={onFocus}
      onMouseDown={onMouseDown}
      placeholder={placeholder}
      readOnly={readonly}
      type={type}
      value={value}
    />
  );
};

Input.propTypes = {
  autoComplete: PropTypes.string,
  className: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  model: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onMouseDown: PropTypes.func,
  placeholder: PropTypes.string,
  readonly: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Input.defaultProps = {
  className: 'form-input secondary-form',
  defaultValue: '',
  onBlur: () => null,
  onChange: () => null,
  onMouseDown: () => null,
  value: '',
};
