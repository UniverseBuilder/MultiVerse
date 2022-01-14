import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { debounce } from "resources/functions";
import { valueChange } from "features/form/formSlice";
import { useForm } from "hooks/useForm";
import PropTypes from "prop-types";
import "../../Form.scss";

export const Input = ({
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
  inputClass,
  formClass,
  style,
}) => {
  const value = useForm(model);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (type === "number") {
      dispatch(valueChange({ model, value: Number(e.target.value) }));
    } else {
      dispatch(valueChange({ model, value: e.target.value }));
    }
  };
  useEffect(() => {
    if (defaultValue || defaultValue === 0) {
      handleChange({ target: { value: defaultValue } });
    }
  }, [defaultValue]);

  return (
    <div className={formClass}>
      <If condition={labelName}>
        <div
          htmlFor="exampleFormControlSelect1"
          className="formLabelClass pb-1"
          style={{ textAlign: alignLabel }}
        >
          {labelName}
        </div>
      </If>
      <input
        type={type}
        className={inputClass}
        id={id}
        aria-describedby="input"
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        disabled={disabled}
        readOnly={readonly}
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
  alignLabel: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  inputClass: PropTypes.string,
  formClass: PropTypes.string,
  debounceWait: PropTypes.number,
};

Input.defaultProps = {
  id: "input-element",
  value: "",
  alignLabel: "left",
  defaultValue: "",
  inputClass: "form-control",
  formClass: "form-group",
  debounceWait: 0,
};
