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
      aria-describedby="input"
      className={className}
      disabled={disabled}
      id={id}
      onChange={handleChange}
      placeholder={placeholder}
      readOnly={readonly}
      type="datetime-local"
      value={value}
    />
  );
};

Datepicker.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  id: PropTypes.string,
  model: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  readonly: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Datepicker.defaultProps = {
  className: 'form-input secondary-form',
  defaultValue: '',
  id: 'datepicker-element',
  onChange: () => {},
  value: '',
};
