import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { useModel } from '../../../utility/hooks';
import { useForm } from '../../../utility/redux/slices/forms/formSlice';


export const TextArea = ({
  id,
  model,
  type,
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
    if (type === 'number') {
      set({ model, value: Number(e.target.value) });
    } else {
      set({ model, value: e.target.value });
    }
    onChange();
  };

  useEffect(() => {
    if (defaultValue && value !== defaultValue) {
      handleChange({ target: { value: defaultValue } });
    }
  }, [defaultValue]);

  return (
    <textarea
      aria-describedby="textarea"
      className={className}
      disabled={disabled}
      id={id}
      onChange={handleChange}
      placeholder={placeholder}
      readOnly={readonly}
      type={type}
      value={value}
    />
  );
};

TextArea.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  id: PropTypes.string,
  model: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  readonly: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TextArea.defaultProps = {
  className: 'form-textarea secondary-form',
  defaultValue: '',
  id: 'textarea-element',
  onChange: () => {},
  value: '',
};
