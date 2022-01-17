import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { useForm } from 'utility/hooks';
import { valueChange } from 'utility/redux/slices/forms/formSlice';

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
  style,
}) => {
  const value = useForm(model);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(valueChange({ model, value: e.target.value }));
    onChange(e.target.value);
  };

  useEffect(() => {
    if (defaultValue) {
      dispatch(valueChange({ model, value: defaultValue }));
    }
  }, [defaultValue]);

  return (
    <select
      className="form-control"
      id={id}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      disabled={disabled}
      style={style}
    >
      <option value="" key="">
        {placeholder}
      </option>
      <Choose>
        <When condition={options[0]?.[labelKey]}>
          {options.map(option => (
            <option value={option[valueKey]} key={option[valueKey]}>
              {option[labelKey]}
            </option>
          ))}
        </When>
        <Otherwise>
          {options.map(option => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </Otherwise>
      </Choose>
    </select>
  );
};

Select.propTypes = {
  id: PropTypes.string,
  labelName: PropTypes.string,
  defaultValue: PropTypes.string,
  model: PropTypes.string,
  options: PropTypes.any,
  selectedValue: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  labelKey: PropTypes.string,
  valueKey: PropTypes.string,
  style: PropTypes.shape({}),
};

Select.defaultProps = {
  options: [],
  model: null,
  disabled: false,
  onChange: () => null,
  style: {},
};
