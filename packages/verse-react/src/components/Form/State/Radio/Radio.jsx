import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { valueChange } from "features/form/formSlice";
import { useForm } from "hooks/useForm";
import PropTypes from "prop-types";
import "../../Form.scss";

export const Radio = ({
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
  name,
  checked,
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
    <div className="flex-container flex-center">
      <input
        type="radio"
        className={inputClass}
        id={id}
        aria-describedby="input"
        onChange={handleChange}
        name={name}
        value={value}
        disabled={disabled}
        checked={checked}
      />
      <span
        htmlFor="exampleFormControlSelect1"
        className="formLabelClass px-1 mt-25"
      >
        {labelName}
      </span>
    </div>
  );
};

Radio.propTypes = {
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
  name: PropTypes.string,
  checked: PropTypes.bool,
};

Radio.defaultProps = {
  id: "input-element",
  value: "",
  alignLabel: "left",
  defaultValue: "",
  inputClass: "inputRadio mr-1 mt-25",
  formClass: "form-group",
};
