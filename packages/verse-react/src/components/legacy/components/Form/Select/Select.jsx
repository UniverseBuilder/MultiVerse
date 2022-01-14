import React from "react";
import PropTypes from "prop-types";
import "../../Form/Form.scss";

export const Select = ({
  id,
  labelName,
  options,
  selectedValue,
  onChange,
  placeholder,
  disabled
}) => {
  return (
    <div className="form-group">
      <label htmlFor="exampleFormControlSelect1" className="formLabelClass">
        {labelName}
      </label>
      <select
        className="form-control"
        id={id}
        value={selectedValue}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      >
        <option value="" key=""></option>
        <Choose>
          <When condition={options[0]?.label}>
            {options.map((option) => (
              <option value={option.value} key={option.value}>
                {option.label}
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
  options: PropTypes.any,
  selectedValue: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

Select.defaultProps = {
  options: [],
  disabled:false
};
