import React from "react";
import PropTypes from "prop-types";
import "../../Form/Form.scss";

export const InputBar = ({ id, type, placeholder, onChange }) => {
  return (
    <input
      type={type}
      className="inputBar"
      id={id}
      aria-describedby="input"
      placeholder={placeholder}
      onChange={onChange}
      autoFocus
      autoComplete="off"
    />
  );
};

InputBar.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

InputBar.defaultProps = {
  id: "input-element",
  value: "",
};
