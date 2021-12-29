import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { valueChange } from "features/form/formSlice";
import { useForm } from "hooks/useForm";
import PropTypes from "prop-types";
import "../../Form.scss";

export const TextArea = ({
  id,
  model,
  labelName,
  type,
  placeholder,
  onChange,
  alignLabel,
  defaultValue,
  disabled,
  readonly,
  style,
}) => {
  const value = useForm(model);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(valueChange({ model, value: e.target.value }));
  };
  useEffect(() => {
    if (defaultValue || defaultValue === 0) {
      handleChange({ target: { value: defaultValue } });
    }
  }, [defaultValue]);

  return (
    <div className="form-group">
      <div
        htmlFor="exampleFormControlSelect1"
        className="formLabelClass pb-1"
        style={{ textAlign: alignLabel }}
      >
        {labelName}
      </div>
      <textarea
        type={type}
        className="form-control"
        id={id}
        aria-describedby="textarea"
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        disabled={disabled}
        readOnly={readonly}
        style={style}
      />
    </div>
  );
};

TextArea.propTypes = {
  labelName: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  alignLabel: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.shape({}),
};

TextArea.defaultProps = {
  id: "input-element",
  value: "",
  alignLabel: "left",
  defaultValue: "",
  style: {},
};
