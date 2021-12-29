import React from "react";
import PropTypes from "prop-types";
import "../../Form/Form.scss";

export const Input = ({
  id,
  value,
  labelName,
  type,
  placeholder,
  onChange,
}) => {
  return (
    <div className="form-group">
      <label htmlFor="exampleFormControlSelect1" className="formLabelClass">
        {labelName}
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        value={value}
        aria-describedby="input"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

Input.propTypes = {
  labelName: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Input.defaultProps = {
  id: "input-element",
  value: "",
};
