import React from "react";

import PropTypes from "prop-types";
import "@multiverses/verse-css/scss/legacy/Form.scss";

export const InputBar = ({ id, type, placeholder, onChange }) => {
  return (
    <input
      aria-describedby="input"
      autoComplete="off"
      autoFocus
      className="inputBar"
      id={id}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  );
};

InputBar.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

InputBar.defaultProps = {
  id: "input-element",
  value: "",
};
