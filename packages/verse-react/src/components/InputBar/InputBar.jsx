import React from "react";
import PropTypes from "prop-types";
import "./InputBar.scss";

export const InputBar = ({
  id,
  type,
  label,
  value,
  placeholder,
  disabled,
  onChange,
}) => {
  return (
    <div className="inputBar">
      <If condition={label}>
        <label>{label}</label>
      </If>
      <input
        id={id}
        type={type}
        name={label}
        className="inputBarc cursorPointer"
        value={value}
        aria-describedby="input"
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
      />
    </div>
  );
};

InputBar.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(["number", "text"]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
};

InputBar.defaultPropd = {
  id: "",
  type: "text",
  value: "",
  label: "",
  disabled: false,
  placeholder: '',
};
