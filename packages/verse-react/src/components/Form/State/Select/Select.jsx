import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "hooks/useForm";
import { List } from "react-virtualized";
import { valueChange } from "features/form/formSlice";
import PropTypes from "prop-types";
import "../../Form.scss";

export const Select = ({
  id,
  labelName,
  model,
  options,
  selectedValue,
  onChange,
  placeholder,
  disabled,
  defaultValue,
  labelKey,
  valueKey,
  formClass,
  style,
}) => {
  const value = useForm(model);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(valueChange({ model, value: e.target.value }));
    onChange(e.target.value);
  };
  useEffect(() => {
    if (defaultValue) {
      dispatch(valueChange({ model, value: defaultValue }));
    }
  }, [defaultValue]);

  return (
    <div className={formClass}>
      <div htmlFor={labelName} className="formLabelClass pb-1">
        {labelName}
      </div>
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
            {options.map((option) => (
              <option value={option[valueKey]} key={option[valueKey]}>
                {option[labelKey]}
              </option>
            ))}
          </When>
          <Otherwise>
            {options.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </Otherwise>
        </Choose>
      </select>
    </div>
  );
};

Select.propTypes = {
  id: PropTypes.string,
  labelName: PropTypes.string,
  model: PropTypes.string,
  options: PropTypes.any,
  selectedValue: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  labelKey: PropTypes.string,
  valueKey: PropTypes.string,
  formClass: PropTypes.string,
  style: PropTypes.shape({}),
};

Select.defaultProps = {
  options: [],
  model: null,
  disabled: false,
  onChange: () => null,
  formClass: "form-group",
  style: {}
};
