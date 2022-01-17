import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { useForm } from 'utility/hooks';
import { valueChange } from 'utility/redux/slices/forms/formSlice';

export const Checkbox = ({
  id,
  model,
  className,
  placeholder,
  onChange,
  defaultValue,
  disabled,
  readonly,
}) => {
  const value = useForm(model);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(valueChange({ model, value: e.target.checked }));
    onChange();
  };

  useEffect(() => {
    handleChange({ target: { checked: defaultValue } });
  }, [defaultValue]);

  return (
    <input
      id={id}
      aria-describedby="input"
      onChange={handleChange}
      type="checkbox"
      className={className}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      readOnly={readonly}
    />
  );
};

Checkbox.propTypes = {
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

Checkbox.defaultProps = {
  id: 'datepicker-element',
  onChange: () => {},
  value: '',
  defaultValue: false,
  className: '',
};
