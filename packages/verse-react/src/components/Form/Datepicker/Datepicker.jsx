import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { useModel } from 'utility/hooks';
import { useForm } from 'utility/redux/slices/forms/formSlice';


export const Datepicker = ({
  id,
  model,
  className,
  placeholder,
  onChange,
  defaultValue,
  disabled,
  readonly,
}) => {
  const value = useModel(model);
  const { set } = useForm();

  const handleChange = e => {
    set({ model, value: e.target.value });
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
      type="datetime-local"
      className={className}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      readOnly={readonly}
    />
  );
};

Datepicker.propTypes = {
  model: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Datepicker.defaultProps = {
  id: 'datepicker-element',
  onChange: () => {},
  value: '',
  defaultValue: '',
  className: 'form-input secondary-form',
};
