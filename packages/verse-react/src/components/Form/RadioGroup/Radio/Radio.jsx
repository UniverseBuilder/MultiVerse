import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { useForm } from '../../../../utility/redux/slices/forms/formSlice';

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
  const { set } = useForm();

  const handleChange = e => {
    set({ model, value: e.target.value });
    onChange();
  };

  useEffect(() => {
    handleChange({ target: { checked: defaultValue } });
  }, [defaultValue]);

  return (
    <input
      aria-describedby="radio"
      className={className}
      disabled={disabled}
      id={id}
      name={model}
      onChange={handleChange}
      placeholder={placeholder}
      readOnly={readonly}
      type="radio"
      value={value}
    />
  );
};

Radio.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.bool]),
  disabled: PropTypes.bool,
  id: PropTypes.string,
  model: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  readonly: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Radio.defaultProps = {
  className: 'form-radio secondary-form',
  defaultValue: false,
  id: 'radio-element',
  onChange: () => {},
  value: '',
};
