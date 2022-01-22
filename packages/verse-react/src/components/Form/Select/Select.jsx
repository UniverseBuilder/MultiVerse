import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { useModel } from 'utility/hooks';
import { useForm } from 'utility/redux/slices/forms/formSlice';

export const Select = ({
  id,
  model,
  options,
  onChange,
  placeholder,
  disabled,
  defaultValue,
  labelKey,
  valueKey,
  className,
}) => {
  const value = useModel(model);
  const { set } = useForm();

  const handleChange = e => {
    set({ model, value: e.target.value });
    onChange(e.target.value);
  };

  useEffect(() => {
    if (defaultValue) {
      set({ model, value: defaultValue });
    }
  }, [defaultValue]);

  return (
    <select
      className={className}
      disabled={disabled}
      id={id}
      onChange={handleChange}
      placeholder={placeholder}
      value={value}
    >
      <option key="" value="">
        {placeholder}
      </option>
      <Choose>
        <When condition={options[0]?.[labelKey]}>
          {options.map(option => (
            <option key={option[valueKey]} value={option[valueKey]}>
              {option[labelKey]}
            </option>
          ))}
        </When>
        <Otherwise>
          {options.map(option => (
            <option className="option" key={option} value={option}>
              {option}
            </option>
          ))}
        </Otherwise>
      </Choose>
    </select>
  );
};

Select.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  labelKey: PropTypes.string,
  labelName: PropTypes.string,
  model: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.any,
  placeholder: PropTypes.string,
  selectedValue: PropTypes.string,
  valueKey: PropTypes.string,
};

Select.defaultProps = {
  className: 'form-select secondary-form',
  disabled: false,
  model: null,
  onChange: () => null,
  options: [],
};
